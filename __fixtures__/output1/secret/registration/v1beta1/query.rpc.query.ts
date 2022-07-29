import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { Key } from "./msg";
import { QueryEncryptedSeedRequest, QueryEncryptedSeedResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  txKey(request: google.protobuf.Empty): Promise<Key>;
  /*Returns the key used for transactions*/

  registrationKey(request: google.protobuf.Empty): Promise<Key>;
  /*Returns the key used for registration*/

  encryptedSeed(request: QueryEncryptedSeedRequest): Promise<QueryEncryptedSeedResponse>;
  /*Returns the encrypted seed for a registered node by public key*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.txKey = this.txKey.bind(this);
    this.registrationKey = this.registrationKey.bind(this);
    this.encryptedSeed = this.encryptedSeed.bind(this);
  }

  txKey(request: google.protobuf.Empty): Promise<Key> {
    const data = google.protobuf.Empty.encode(request).finish();
    const promise = this.rpc.request("secret.registration.v1beta1.Query", "TxKey", data);
    return promise.then(data => Key.decode(new _m0.Reader(data)));
  }

  registrationKey(request: google.protobuf.Empty): Promise<Key> {
    const data = google.protobuf.Empty.encode(request).finish();
    const promise = this.rpc.request("secret.registration.v1beta1.Query", "RegistrationKey", data);
    return promise.then(data => Key.decode(new _m0.Reader(data)));
  }

  encryptedSeed(request: QueryEncryptedSeedRequest): Promise<QueryEncryptedSeedResponse> {
    const data = QueryEncryptedSeedRequest.encode(request).finish();
    const promise = this.rpc.request("secret.registration.v1beta1.Query", "EncryptedSeed", data);
    return promise.then(data => QueryEncryptedSeedResponse.decode(new _m0.Reader(data)));
  }

}