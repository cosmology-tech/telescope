import { LCDClient } from "@osmonauts/lcd";
import { Empty } from "../../../google/protobuf/empty";
import { Key } from "./msg";
import { QueryEncryptedSeedRequest, QueryEncryptedSeedResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Returns the key used for transactions */
  async txKey(params: google.protobuf.Empty): Promise<Key> {
    const endpoint = `registration/v1beta1/tx-key/`;
    return await this.request(endpoint);
  }

  /* Returns the key used for registration */
  async registrationKey(params: google.protobuf.Empty): Promise<Key> {
    const endpoint = `registration/v1beta1/registration-key/`;
    return await this.request(endpoint);
  }

  /* Returns the encrypted seed for a registered node by public key */
  async encryptedSeed(params: QueryEncryptedSeedRequest): Promise<QueryEncryptedSeedResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pubKey !== "undefined") {
      options.params.pub_key = params.pubKey;
    }

    const endpoint = `registration/v1beta1/encrypted-seed/${params.pub_key}`;
    return await this.request(endpoint, options);
  }

}