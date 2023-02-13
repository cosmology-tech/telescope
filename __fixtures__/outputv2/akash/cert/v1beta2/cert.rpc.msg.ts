import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";

/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  createCertificate(request: DeepPartial<MsgCreateCertificate>, metadata?: grpc.Metadata): Promise<MsgCreateCertificateResponse>;

  /** RevokeCertificate defines a method to revoke the certificate */
  revokeCertificate(request: DeepPartial<MsgRevokeCertificate>, metadata?: grpc.Metadata): Promise<MsgRevokeCertificateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createCertificate = this.createCertificate.bind(this);
    this.revokeCertificate = this.revokeCertificate.bind(this);
  }

  createCertificate(request: DeepPartial<MsgCreateCertificate>, metadata?: grpc.Metadata): Promise<MsgCreateCertificateResponse> {
    return this.rpc.unary(MsgCreateCertificateDesc, MsgCreateCertificate.fromPartial(request), metadata);
  }

  revokeCertificate(request: DeepPartial<MsgRevokeCertificate>, metadata?: grpc.Metadata): Promise<MsgRevokeCertificateResponse> {
    return this.rpc.unary(MsgRevokeCertificateDesc, MsgRevokeCertificate.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "akash.cert.v1beta2.Msg"
};
export const MsgCreateCertificateDesc: UnaryMethodDefinitionish = {
  methodName: "CreateCertificate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateCertificate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateCertificateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgRevokeCertificateDesc: UnaryMethodDefinitionish = {
  methodName: "RevokeCertificate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRevokeCertificate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgRevokeCertificateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined);
}