import axios from 'axios';
export class LCDClient {
    restEndpoint: string;
    timeout: number;
    private instance: any;

    constructor(config: { restEndpoint: string, timeout?: number }) {
        this.restEndpoint = config.restEndpoint.endsWith('/') ? config.restEndpoint : `${config.restEndpoint}/`;
        this.timeout = config.timeout ?? 10000;
        this.instance = axios.create({
            baseURL: this.restEndpoint,
            timeout: this.timeout,
            headers: {}
        });
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
    }

    get<ResponseType = unknown>(endpoint, opts = {}) {
        return new Promise<ResponseType>(async (resolve, reject) => {
            try {
                const response = await this.instance.get(endpoint, {
                    timeout: this.timeout,
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

    post<ResponseType = unknown>(endpoint, body = {}, opts = {}) {
        return new Promise<ResponseType>(async (resolve, reject) => {
            try {
                const response = await this.instance.post(endpoint, body, {
                    timeout: this.timeout,
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
