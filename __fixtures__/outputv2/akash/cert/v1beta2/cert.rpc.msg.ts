import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export class Msg {
  static CreateCertificate(): Promise<MsgCreateCertificateResponse> {}

  static RevokeCertificate(): Promise<MsgRevokeCertificateResponse> {}

}