const requestNames = [
    { sysName: "nbkiRequestsCount", name: "Total" },
    { sysName: "nbkiCollectionRequestCount", name: "Last 24 months" },
    { sysName: "nbkiLastRequestCount", name: "Last 30 days" },
    { sysName: "score", name: "Score" },
];

const requestMicroNames = [
    { sysName: "microcreditRequestsCount", name: "Total" },
    { sysName: "last30DaysMicrocreditRequestsCount", name: "Last 30 days" },
    { sysName: "lastYearMicrocreditRequestsCount", name: "Last year" },
    {
        sysName: "more1YearMicrocreditRequestsCount",
        name: "More than 1 year",
    },
];

export { requestNames, requestMicroNames };
