import * as _169 from "./api/annotations";
import * as _170 from "./api/auth";
import * as _171 from "./api/backend";
import * as _172 from "./api/billing";
import * as _173 from "./api/client";
import * as _174 from "./api/config_change";
import * as _175 from "./api/consumer";
import * as _176 from "./api/context";
import * as _177 from "./api/control";
import * as _178 from "./api/distribution";
import * as _179 from "./api/documentation";
import * as _180 from "./api/endpoint";
import * as _181 from "./api/error_reason";
import * as _182 from "./api/field_behavior";
import * as _183 from "./api/http";
import * as _184 from "./api/httpbody";
import * as _185 from "./api/label";
import * as _186 from "./api/launch_stage";
import * as _187 from "./api/log";
import * as _188 from "./api/logging";
import * as _189 from "./api/metric";
import * as _190 from "./api/monitored_resource";
import * as _191 from "./api/monitoring";
import * as _192 from "./api/quota";
import * as _193 from "./api/resource";
import * as _194 from "./api/routing";
import * as _195 from "./api/service";
import * as _196 from "./api/source_info";
import * as _197 from "./api/system_parameter";
import * as _198 from "./api/usage";
import * as _199 from "./api/visibility";
import * as _200 from "./logging/type/http_request";
import * as _201 from "./logging/type/log_severity";
import * as _202 from "./logging/v2/log_entry";
import * as _203 from "./logging/v2/logging_config";
import * as _204 from "./logging/v2/logging_metrics";
import * as _205 from "./logging/v2/logging";
import * as _206 from "./longrunning/operations";
import * as _207 from "./protobuf/any";
import * as _208 from "./protobuf/api";
import * as _209 from "./protobuf/descriptor";
import * as _210 from "./protobuf/duration";
import * as _211 from "./protobuf/empty";
import * as _212 from "./protobuf/field_mask";
import * as _213 from "./protobuf/source_context";
import * as _214 from "./protobuf/struct";
import * as _215 from "./protobuf/timestamp";
import * as _216 from "./protobuf/type";
import * as _217 from "./protobuf/wrappers";
import * as _218 from "./rpc/code";
import * as _219 from "./rpc/error_details";
import * as _220 from "./rpc/status";
export namespace google {
  export const api = { ..._169,
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
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199
  };
  export namespace logging {
    export const type = { ..._200,
      ..._201
    };
    export const v2 = { ..._202,
      ..._203,
      ..._204,
      ..._205
    };
  }
  export const longrunning = { ..._206
  };
  export const protobuf = { ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217
  };
  export const rpc = { ..._218,
    ..._219,
    ..._220
  };
}