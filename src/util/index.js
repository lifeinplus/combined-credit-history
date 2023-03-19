const dateOptions = {
    header: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    },

    table: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    },

    tableStatus: {
        month: "numeric",
        year: "numeric",
        timeZone: "Europe/Moscow",
    },
};

const langs = {
    en: { locale: "en-GB", nativeName: "English" },
    ru: { locale: "ru-RU", nativeName: "Русский" },
};

function getDateTimeFormat(locale, type) {
    return new Intl.DateTimeFormat(locale, dateOptions[type]);
}

function joinClasses(list) {
    return list.filter((item) => item).join(" ") || undefined;
}

export { getDateTimeFormat, joinClasses, langs };
