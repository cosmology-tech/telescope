import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateCertificate, MsgCreateCertificateSDKType, MsgCreateCertificateResponse, MsgCreateCertificateResponseSDKType, MsgRevokeCertificate, MsgRevokeCertificateSDKType, MsgRevokeCertificateResponse, MsgRevokeCertificateResponseSDKType } from "./cert";
export class Msg {
  static CreateCertificate(request: MsgCreateCertificate, initRequest?: fm.initReq): Promise<MsgCreateCertificateResponse> {
    return fm.fetchReq(`/CreateCertificate/CreateCertificate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static RevokeCertificate(request: MsgRevokeCertificate, initRequest?: fm.initReq): Promise<MsgRevokeCertificateResponse> {
    return fm.fetchReq(`/RevokeCertificate/RevokeCertificate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}