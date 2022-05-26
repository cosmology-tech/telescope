import * as _155 from "./api/annotations";
import * as _156 from "./api/auth";
import * as _157 from "./api/backend";
import * as _158 from "./api/billing";
import * as _159 from "./api/client";
import * as _160 from "./api/config_change";
import * as _161 from "./api/consumer";
import * as _162 from "./api/context";
import * as _163 from "./api/control";
import * as _164 from "./api/distribution";
import * as _165 from "./api/documentation";
import * as _166 from "./api/endpoint";
import * as _167 from "./api/error_reason";
import * as _168 from "./api/field_behavior";
import * as _169 from "./api/http";
import * as _170 from "./api/httpbody";
import * as _171 from "./api/label";
import * as _172 from "./api/launch_stage";
import * as _173 from "./api/log";
import * as _174 from "./api/logging";
import * as _175 from "./api/metric";
import * as _176 from "./api/monitored_resource";
import * as _177 from "./api/monitoring";
import * as _178 from "./api/quota";
import * as _179 from "./api/resource";
import * as _180 from "./api/routing";
import * as _181 from "./api/service";
import * as _182 from "./api/source_info";
import * as _183 from "./api/system_parameter";
import * as _184 from "./api/usage";
import * as _185 from "./api/visibility";
import * as _186 from "./logging/type/http_request";
import * as _187 from "./logging/type/log_severity";
import * as _188 from "./logging/v2/log_entry";
import * as _189 from "./logging/v2/logging_config";
import * as _190 from "./logging/v2/logging_metrics";
import * as _191 from "./logging/v2/logging";
import * as _192 from "./longrunning/operations";
import * as _193 from "./protobuf/any";
import * as _194 from "./protobuf/api";
import * as _195 from "./protobuf/descriptor";
import * as _196 from "./protobuf/duration";
import * as _197 from "./protobuf/empty";
import * as _198 from "./protobuf/field_mask";
import * as _199 from "./protobuf/source_context";
import * as _200 from "./protobuf/struct";
import * as _201 from "./protobuf/timestamp";
import * as _202 from "./protobuf/type";
import * as _203 from "./protobuf/wrappers";
import * as _204 from "./rpc/code";
import * as _205 from "./rpc/error_details";
import * as _206 from "./rpc/status";
export namespace google {
  export const api = { ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185
  };
  export namespace logging {
    export const type = { ..._186,
      ..._187
    };
    export const v2 = { ..._188,
      ..._189,
      ..._190,
      ..._191
    };
  }
  export const longrunning = { ..._192
  };
  export const protobuf = { ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203
  };
  export const rpc = { ..._204,
    ..._205,
    ..._206
  };
}