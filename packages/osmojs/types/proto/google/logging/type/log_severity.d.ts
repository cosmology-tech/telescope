/**
 * The severity of the event described in a log entry, expressed as one of the
 * standard severity levels listed below.  For your reference, the levels are
 * assigned the listed numeric values. The effect of using numeric values other
 * than those listed is undefined.
 *
 * You can filter for log entries by severity.  For example, the following
 * filter expression will match log entries with severities `INFO`, `NOTICE`,
 * and `WARNING`:
 *
 * severity > DEBUG AND severity <= WARNING
 *
 * If you are writing log entries, you should map other severity encodings to
 * one of these standard levels. For example, you might map all of Java's FINE,
 * FINER, and FINEST levels to `LogSeverity.DEBUG`. You can preserve the
 * original severity level in the log entry payload if you wish.
 */
export declare enum LogSeverity {
    /** DEFAULT - (0) The log entry has no assigned severity level. */
    DEFAULT = 0,
    /** DEBUG - (100) Debug or trace information. */
    DEBUG = 100,
    /** INFO - (200) Routine information, such as ongoing status or performance. */
    INFO = 200,
    /**
     * NOTICE - (300) Normal but significant events, such as start up, shut down, or
     * a configuration change.
     */
    NOTICE = 300,
    /** WARNING - (400) Warning events might cause problems. */
    WARNING = 400,
    /** ERROR - (500) Error events are likely to cause problems. */
    ERROR = 500,
    /** CRITICAL - (600) Critical events cause more severe problems or outages. */
    CRITICAL = 600,
    /** ALERT - (700) A person must take an action immediately. */
    ALERT = 700,
    /** EMERGENCY - (800) One or more systems are unusable. */
    EMERGENCY = 800,
    UNRECOGNIZED = -1
}
export declare function logSeverityFromJSON(object: any): LogSeverity;
export declare function logSeverityToJSON(object: LogSeverity): string;
