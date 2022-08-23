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

    request<ResponseType = unknown>(endpoint, opts = {}) {
        return new Promise<ResponseType>(async (resolve, reject) => {
            try {
                const response = await this.instance.get(endpoint, {
                    timeout: 10000,
                    ...opts
                });
                if (response && response.data) {
                    resolve(response.data);
                } else {
                    reject('no response data');
                }
            } catch (e) {
                return reject(e);
            }

        });
    }
}
