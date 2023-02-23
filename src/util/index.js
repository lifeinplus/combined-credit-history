import { format } from "date-fns";

const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Русский" },
};

function formatHeader(isoDate) {
    const date = new Date(isoDate);
    return format(date, "dd-MM-yyyy HH:mm:ss");
}

function formatToMonthYear(isoDate) {
    const milliseconds = Date.parse(isoDate);

    return new Intl.DateTimeFormat("ru", {
        month: "numeric",
        year: "numeric",
        timeZone: "Europe/Moscow",
    }).format(milliseconds);
}

function joinClasses(classes) {
    return classes.filter((item) => item).join(" ");
}

export { formatHeader, formatToMonthYear, joinClasses, lngs };
