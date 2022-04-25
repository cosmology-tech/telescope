import * as _873 from "./api/annotations";
import * as _874 from "./api/auth";
import * as _875 from "./api/backend";
import * as _876 from "./api/billing";
import * as _877 from "./api/client";
import * as _878 from "./api/config_change";
import * as _879 from "./api/consumer";
import * as _880 from "./api/context";
import * as _881 from "./api/control";
import * as _882 from "./api/distribution";
import * as _883 from "./api/documentation";
import * as _884 from "./api/endpoint";
import * as _885 from "./api/error_reason";
import * as _886 from "./api/field_behavior";
import * as _887 from "./api/http";
import * as _888 from "./api/httpbody";
import * as _889 from "./api/label";
import * as _890 from "./api/launch_stage";
import * as _891 from "./api/log";
import * as _892 from "./api/logging";
import * as _893 from "./api/metric";
import * as _894 from "./api/monitored_resource";
import * as _895 from "./api/monitoring";
import * as _896 from "./api/quota";
import * as _897 from "./api/resource";
import * as _898 from "./api/routing";
import * as _899 from "./api/service";
import * as _900 from "./api/source_info";
import * as _901 from "./api/system_parameter";
import * as _902 from "./api/usage";
import * as _903 from "./api/visibility";
import * as _904 from "./logging/type/http_request";
import * as _905 from "./logging/type/log_severity";
import * as _906 from "./logging/v2/log_entry";
import * as _907 from "./logging/v2/logging_config";
import * as _908 from "./logging/v2/logging_metrics";
import * as _909 from "./logging/v2/logging";
import * as _910 from "./longrunning/operations";
import * as _911 from "./protobuf/any";
import * as _912 from "./protobuf/api";
import * as _913 from "./protobuf/descriptor";
import * as _914 from "./protobuf/duration";
import * as _915 from "./protobuf/empty";
import * as _916 from "./protobuf/field_mask";
import * as _917 from "./protobuf/source_context";
import * as _918 from "./protobuf/struct";
import * as _919 from "./protobuf/timestamp";
import * as _920 from "./protobuf/type";
import * as _921 from "./protobuf/wrappers";
import * as _922 from "./rpc/code";
import * as _923 from "./rpc/error_details";
import * as _924 from "./rpc/status";
export namespace google {
  export const api = { ..._873,
    ..._874,
    ..._875,
    ..._876,
    ..._877,
    ..._878,
    ..._879,
    ..._880,
    ..._881,
    ..._882,
    ..._883,
    ..._884,
    ..._885,
    ..._886,
    ..._887,
    ..._888,
    ..._889,
    ..._890,
    ..._891,
    ..._892,
    ..._893,
    ..._894,
    ..._895,
    ..._896,
    ..._897,
    ..._898,
    ..._899,
    ..._900,
    ..._901,
    ..._902,
    ..._903
  };
  export namespace logging {
    export const type = { ..._904,
      ..._905
    };
    export const v2 = { ..._906,
      ..._907,
      ..._908,
      ..._909
    };
  }
  export const longrunning = { ..._910
  };
  export const protobuf = { ..._911,
    ..._912,
    ..._913,
    ..._914,
    ..._915,
    ..._916,
    ..._917,
    ..._918,
    ..._919,
    ..._920,
    ..._921
  };
  export const rpc = { ..._922,
    ..._923,
    ..._924
  };
}