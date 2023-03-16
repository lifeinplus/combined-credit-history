import { format } from "date-fns";

const lngs = {
    en: { locale: "en-GB", nativeName: "English" },
    ru: { locale: "ru-RU", nativeName: "Русский" },
};

function formatHeader(isoDate) {
    const date = new Date(isoDate);
    return format(date, "dd-MM-yyyy HH:mm:ss");
}

function formatToMonthYear(isoDate, dateTimeFormat = getDateTimeFormat()) {
    const milliseconds = Date.parse(isoDate);
    return dateTimeFormat.format(milliseconds);
}

function getDateTimeFormat() {
    return new Intl.DateTimeFormat("ru", {
        month: "numeric",
        year: "numeric",
        timeZone: "Europe/Moscow",
    });
}

function joinClasses(classes) {
    return classes.filter((item) => item).join(" ");
}

export {
    formatHeader,
    formatToMonthYear,
    getDateTimeFormat,
    joinClasses,
    lngs,
};
