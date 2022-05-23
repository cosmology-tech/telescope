import axios from 'axios';
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
        return new Promise(async (resolve, reject) => {
            let response;
            try {
                response = await this.instance.get(endpoint, {
                    timeout: 10000,
                    ...opts
                });
            } catch (e) {
                return reject(e);
            }

            if (response && response.data) {
                resolve(response.data);
            } else {
                reject('no response data');
            }
        });
    }
}
