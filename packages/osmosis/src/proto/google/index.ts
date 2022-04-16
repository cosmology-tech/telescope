import * as _898 from "./api/annotations";
import * as _899 from "./api/annotations";
import * as _900 from "./api/auth";
import * as _901 from "./api/auth";
import * as _902 from "./api/backend";
import * as _903 from "./api/backend";
import * as _904 from "./api/billing";
import * as _905 from "./api/billing";
import * as _906 from "./api/client";
import * as _907 from "./api/client";
import * as _908 from "./api/config_change";
import * as _909 from "./api/config_change";
import * as _910 from "./api/consumer";
import * as _911 from "./api/consumer";
import * as _912 from "./api/context";
import * as _913 from "./api/context";
import * as _914 from "./api/control";
import * as _915 from "./api/control";
import * as _916 from "./api/distribution";
import * as _917 from "./api/distribution";
import * as _918 from "./api/documentation";
import * as _919 from "./api/documentation";
import * as _920 from "./api/endpoint";
import * as _921 from "./api/endpoint";
import * as _922 from "./api/error_reason";
import * as _923 from "./api/error_reason";
import * as _924 from "./api/field_behavior";
import * as _925 from "./api/field_behavior";
import * as _926 from "./api/http";
import * as _927 from "./api/http";
import * as _928 from "./api/httpbody";
import * as _929 from "./api/httpbody";
import * as _930 from "./api/label";
import * as _931 from "./api/label";
import * as _932 from "./api/launch_stage";
import * as _933 from "./api/launch_stage";
import * as _934 from "./api/log";
import * as _935 from "./api/log";
import * as _936 from "./api/logging";
import * as _937 from "./api/logging";
import * as _938 from "./api/metric";
import * as _939 from "./api/metric";
import * as _940 from "./api/monitored_resource";
import * as _941 from "./api/monitored_resource";
import * as _942 from "./api/monitoring";
import * as _943 from "./api/monitoring";
import * as _944 from "./api/quota";
import * as _945 from "./api/quota";
import * as _946 from "./api/resource";
import * as _947 from "./api/resource";
import * as _948 from "./api/routing";
import * as _949 from "./api/routing";
import * as _950 from "./api/service";
import * as _951 from "./api/service";
import * as _952 from "./api/source_info";
import * as _953 from "./api/source_info";
import * as _954 from "./api/system_parameter";
import * as _955 from "./api/system_parameter";
import * as _956 from "./api/usage";
import * as _957 from "./api/usage";
import * as _958 from "./api/visibility";
import * as _959 from "./api/visibility";
import * as _960 from "./logging/type/http_request";
import * as _961 from "./logging/type/http_request";
import * as _962 from "./logging/type/log_severity";
import * as _963 from "./logging/type/log_severity";
import * as _964 from "./logging/v2/log_entry";
import * as _965 from "./logging/v2/log_entry";
import * as _966 from "./logging/v2/logging_config";
import * as _967 from "./logging/v2/logging_config";
import * as _968 from "./logging/v2/logging_metrics";
import * as _969 from "./logging/v2/logging_metrics";
import * as _970 from "./logging/v2/logging";
import * as _971 from "./logging/v2/logging";
import * as _972 from "./longrunning/operations";
import * as _973 from "./longrunning/operations";
import * as _974 from "./protobuf/any";
import * as _975 from "./protobuf/any";
import * as _976 from "./protobuf/api";
import * as _977 from "./protobuf/api";
import * as _978 from "./protobuf/descriptor";
import * as _979 from "./protobuf/descriptor";
import * as _980 from "./protobuf/duration";
import * as _981 from "./protobuf/duration";
import * as _982 from "./protobuf/empty";
import * as _983 from "./protobuf/empty";
import * as _984 from "./protobuf/field_mask";
import * as _985 from "./protobuf/field_mask";
import * as _986 from "./protobuf/source_context";
import * as _987 from "./protobuf/source_context";
import * as _988 from "./protobuf/struct";
import * as _989 from "./protobuf/struct";
import * as _990 from "./protobuf/timestamp";
import * as _991 from "./protobuf/timestamp";
import * as _992 from "./protobuf/type";
import * as _993 from "./protobuf/type";
import * as _994 from "./protobuf/wrappers";
import * as _995 from "./protobuf/wrappers";
import * as _996 from "./rpc/code";
import * as _997 from "./rpc/code";
import * as _998 from "./rpc/error_details";
import * as _999 from "./rpc/error_details";
import * as _1000 from "./rpc/status";
import * as _1001 from "./rpc/status";
export namespace google {
  export const api = { ..._898,
    ..._899,
    ..._900,
    ..._901,
    ..._902,
    ..._903,
    ..._904,
    ..._905,
    ..._906,
    ..._907,
    ..._908,
    ..._909,
    ..._910,
    ..._911,
    ..._912,
    ..._913,
    ..._914,
    ..._915,
    ..._916,
    ..._917,
    ..._918,
    ..._919,
    ..._920,
    ..._921,
    ..._922,
    ..._923,
    ..._924,
    ..._925,
    ..._926,
    ..._927,
    ..._928,
    ..._929,
    ..._930,
    ..._931,
    ..._932,
    ..._933,
    ..._934,
    ..._935,
    ..._936,
    ..._937,
    ..._938,
    ..._939,
    ..._940,
    ..._941,
    ..._942,
    ..._943,
    ..._944,
    ..._945,
    ..._946,
    ..._947,
    ..._948,
    ..._949,
    ..._950,
    ..._951,
    ..._952,
    ..._953,
    ..._954,
    ..._955,
    ..._956,
    ..._957,
    ..._958,
    ..._959
  };
  export namespace logging {
    export const type = { ..._960,
      ..._961,
      ..._962,
      ..._963
    };
    export const v2 = { ..._964,
      ..._965,
      ..._966,
      ..._967,
      ..._968,
      ..._969,
      ..._970,
      ..._971
    };
  }
  export const longrunning = { ..._972,
    ..._973
  };
  export const protobuf = { ..._974,
    ..._975,
    ..._976,
    ..._977,
    ..._978,
    ..._979,
    ..._980,
    ..._981,
    ..._982,
    ..._983,
    ..._984,
    ..._985,
    ..._986,
    ..._987,
    ..._988,
    ..._989,
    ..._990,
    ..._991,
    ..._992,
    ..._993,
    ..._994,
    ..._995
  };
  export const rpc = { ..._996,
    ..._997,
    ..._998,
    ..._999,
    ..._1000,
    ..._1001
  };
}