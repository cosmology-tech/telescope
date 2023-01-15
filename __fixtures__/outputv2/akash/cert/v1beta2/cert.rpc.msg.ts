import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export class Msg {
  static CreateCertificate(request: MsgCreateCertificate, initRequest?: fm.initReq): Promise<MsgCreateCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2.Msg/CreateCertificate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static RevokeCertificate(request: MsgRevokeCertificate, initRequest?: fm.initReq): Promise<MsgRevokeCertificateResponse> {
    return fm.fetchReq(`/akash.cert.v1beta2.Msg/RevokeCertificate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}