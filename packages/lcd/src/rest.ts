import axios from 'axios';
import retry from 'retry';

export class LCDClient {
    restEndpoint: string;
    instance: any;

    constructor({ restEndpoint }) {
        this.restEndpoint = restEndpoint.endsWith('/') ? restEndpoint : `${restEndpoint}/`;
        this.instance = axios.create({
            baseURL: this.restEndpoint,
            timeout: 10000,
            headers: {}
        });
    }

    request(endpoint, opts = {}) {
        const operation = retry.operation({
            retries: 5,
            factor: 2,
            minTimeout: 1 * 1000,
            maxTimeout: 60 * 1000
        });

        return new Promise((resolve, reject) => {
            operation.attempt(async () => {
                let response;
                let err;
                try {
                    response = await this.instance.get(endpoint, {
                        timeout: 10000,
                        ...opts
                    });
                } catch (e) {
                    console.error(
                        `response error: ${e.response ? e.response.data : e
                        }`
                    );
                    const statusNum = Number(e?.response?.status);
                    if (statusNum >= 500) err = true;
                    else return reject(e);
                }

                if (operation.retry(err)) {
                    return;
                }

                if (response && response.data) {
                    resolve(response.data);
                } else {
                    reject(operation.mainError());
                }
            });
        });
    }
}
