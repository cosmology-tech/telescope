import * as _639 from "./api/annotations";
import * as _640 from "./api/auth";
import * as _641 from "./api/backend";
import * as _642 from "./api/billing";
import * as _643 from "./api/client";
import * as _644 from "./api/config_change";
import * as _645 from "./api/consumer";
import * as _646 from "./api/context";
import * as _647 from "./api/control";
import * as _648 from "./api/distribution";
import * as _649 from "./api/documentation";
import * as _650 from "./api/endpoint";
import * as _651 from "./api/error_reason";
import * as _652 from "./api/field_behavior";
import * as _653 from "./api/http";
import * as _654 from "./api/httpbody";
import * as _655 from "./api/label";
import * as _656 from "./api/launch_stage";
import * as _657 from "./api/log";
import * as _658 from "./api/logging";
import * as _659 from "./api/metric";
import * as _660 from "./api/monitored_resource";
import * as _661 from "./api/monitoring";
import * as _662 from "./api/quota";
import * as _663 from "./api/resource";
import * as _664 from "./api/routing";
import * as _665 from "./api/service";
import * as _666 from "./api/source_info";
import * as _667 from "./api/system_parameter";
import * as _668 from "./api/usage";
import * as _669 from "./api/visibility";
import * as _670 from "./logging/type/http_request";
import * as _671 from "./logging/type/log_severity";
import * as _672 from "./logging/v2/log_entry";
import * as _673 from "./logging/v2/logging_config";
import * as _674 from "./logging/v2/logging_metrics";
import * as _675 from "./logging/v2/logging";
import * as _676 from "./longrunning/operations";
import * as _677 from "./protobuf/any";
import * as _678 from "./protobuf/api";
import * as _679 from "./protobuf/descriptor";
import * as _680 from "./protobuf/duration";
import * as _681 from "./protobuf/empty";
import * as _682 from "./protobuf/field_mask";
import * as _683 from "./protobuf/source_context";
import * as _684 from "./protobuf/struct";
import * as _685 from "./protobuf/timestamp";
import * as _686 from "./protobuf/type";
import * as _687 from "./protobuf/wrappers";
import * as _688 from "./rpc/code";
import * as _689 from "./rpc/error_details";
import * as _690 from "./rpc/status";
export namespace google {
  export const api = { ..._639,
    ..._640,
    ..._641,
    ..._642,
    ..._643,
    ..._644,
    ..._645,
    ..._646,
    ..._647,
    ..._648,
    ..._649,
    ..._650,
    ..._651,
    ..._652,
    ..._653,
    ..._654,
    ..._655,
    ..._656,
    ..._657,
    ..._658,
    ..._659,
    ..._660,
    ..._661,
    ..._662,
    ..._663,
    ..._664,
    ..._665,
    ..._666,
    ..._667,
    ..._668,
    ..._669
  };
  export namespace logging {
    export const type = { ..._670,
      ..._671
    };
    export const v2 = { ..._672,
      ..._673,
      ..._674,
      ..._675
    };
  }
  export const longrunning = { ..._676
  };
  export const protobuf = { ..._677,
    ..._678,
    ..._679,
    ..._680,
    ..._681,
    ..._682,
    ..._683,
    ..._684,
    ..._685,
    ..._686,
    ..._687
  };
  export const rpc = { ..._688,
    ..._689,
    ..._690
  };
}