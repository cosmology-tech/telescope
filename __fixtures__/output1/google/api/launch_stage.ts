export enum LaunchStage {
  /*Do not use this default value.*/
  LAUNCH_STAGE_UNSPECIFIED = 0,

  /*The feature is not yet implemented. Users can not use it.*/
  UNIMPLEMENTED = 6,

  /*Prelaunch features are hidden from users and are only visible internally.*/
  PRELAUNCH = 7,

  /*Early Access features are limited to a closed group of testers. To use
  these features, you must sign up in advance and sign a Trusted Tester
  agreement (which includes confidentiality provisions). These features may
  be unstable, changed in backward-incompatible ways, and are not
  guaranteed to be released.*/
  EARLY_ACCESS = 1,

  /*Alpha is a limited availability test for releases before they are cleared
  for widespread use. By Alpha, all significant design issues are resolved
  and we are in the process of verifying functionality. Alpha customers
  need to apply for access, agree to applicable terms, and have their
  projects allowlisted. Alpha releases don’t have to be feature complete,
  no SLAs are provided, and there are no technical support obligations, but
  they will be far enough along that customers can actually use them in
  test environments or for limited-use tests -- just like they would in
  normal production cases.*/
  ALPHA = 2,

  /*Beta is the point at which we are ready to open a release for any
  customer to use. There are no SLA or technical support obligations in a
  Beta release. Products will be complete from a feature perspective, but
  may have some open outstanding issues. Beta releases are suitable for
  limited production use cases.*/
  BETA = 3,

  /*GA features are open to all developers and are considered stable and
  fully qualified for production use.*/
  GA = 4,

  /*Deprecated features are scheduled to be shut down and removed. For more
  information, see the “Deprecation Policy” section of our [Terms of
  Service](https://cloud.google.com/terms/)
  and the [Google Cloud Platform Subject to the Deprecation
  Policy](https://cloud.google.com/terms/deprecation) documentation.*/
  DEPRECATED = 5,
  UNRECOGNIZED = -1,
}
export function launchStageFromJSON(object: any): LaunchStage {
  switch (object) {
    case "LAUNCH_STAGE_UNSPECIFIED":
      return LaunchStage.LAUNCH_STAGE_UNSPECIFIED;

    case "UNIMPLEMENTED":
      return LaunchStage.UNIMPLEMENTED;

    case "PRELAUNCH":
      return LaunchStage.PRELAUNCH;

    case "EARLY_ACCESS":
      return LaunchStage.EARLY_ACCESS;

    case "ALPHA":
      return LaunchStage.ALPHA;

    case "BETA":
      return LaunchStage.BETA;

    case "GA":
      return LaunchStage.GA;

    case "DEPRECATED":
      return LaunchStage.DEPRECATED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LaunchStage.UNRECOGNIZED;
  }
}
export function launchStageToJSON(object: LaunchStage): string {
  switch (object) {
    case LaunchStage.LAUNCH_STAGE_UNSPECIFIED:
      return "LAUNCH_STAGE_UNSPECIFIED";

    case LaunchStage.UNIMPLEMENTED:
      return "UNIMPLEMENTED";

    case LaunchStage.PRELAUNCH:
      return "PRELAUNCH";

    case LaunchStage.EARLY_ACCESS:
      return "EARLY_ACCESS";

    case LaunchStage.ALPHA:
      return "ALPHA";

    case LaunchStage.BETA:
      return "BETA";

    case LaunchStage.GA:
      return "GA";

    case LaunchStage.DEPRECATED:
      return "DEPRECATED";

    default:
      return "UNKNOWN";
  }
}