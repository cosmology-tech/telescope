export enum LogSeverity {
  /*(0) The log entry has no assigned severity level.*/
  DEFAULT = 0,

  /*(100) Debug or trace information.*/
  DEBUG = 100,

  /*(200) Routine information, such as ongoing status or performance.*/
  INFO = 200,

  /*(300) Normal but significant events, such as start up, shut down, or
  a configuration change.*/
  NOTICE = 300,

  /*(400) Warning events might cause problems.*/
  WARNING = 400,

  /*(500) Error events are likely to cause problems.*/
  ERROR = 500,

  /*(600) Critical events cause more severe problems or outages.*/
  CRITICAL = 600,

  /*(700) A person must take an action immediately.*/
  ALERT = 700,

  /*(800) One or more systems are unusable.*/
  EMERGENCY = 800,
  UNRECOGNIZED = -1,
}
export function logSeverityFromJSON(object: any): LogSeverity {
  switch (object) {
    case "DEFAULT":
      return LogSeverity.DEFAULT;

    case "DEBUG":
      return LogSeverity.DEBUG;

    case "INFO":
      return LogSeverity.INFO;

    case "NOTICE":
      return LogSeverity.NOTICE;

    case "WARNING":
      return LogSeverity.WARNING;

    case "ERROR":
      return LogSeverity.ERROR;

    case "CRITICAL":
      return LogSeverity.CRITICAL;

    case "ALERT":
      return LogSeverity.ALERT;

    case "EMERGENCY":
      return LogSeverity.EMERGENCY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LogSeverity.UNRECOGNIZED;
  }
}
export function logSeverityToJSON(object: LogSeverity): string {
  switch (object) {
    case LogSeverity.DEFAULT:
      return "DEFAULT";

    case LogSeverity.DEBUG:
      return "DEBUG";

    case LogSeverity.INFO:
      return "INFO";

    case LogSeverity.NOTICE:
      return "NOTICE";

    case LogSeverity.WARNING:
      return "WARNING";

    case LogSeverity.ERROR:
      return "ERROR";

    case LogSeverity.CRITICAL:
      return "CRITICAL";

    case LogSeverity.ALERT:
      return "ALERT";

    case LogSeverity.EMERGENCY:
      return "EMERGENCY";

    default:
      return "UNKNOWN";
  }
}