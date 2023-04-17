const dateOptions = {
    header: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    },

    status: {
        month: "numeric",
        year: "numeric",
        timeZone: "Europe/Moscow",
    },

    time: {
        hour: "numeric",
        minute: "numeric",
    },
};

const langs = {
    en: { locale: "en-GB", nativeName: "English" },
    ru: { locale: "ru-RU", nativeName: "Русский" },
};

function getDateFormat(locale, type) {
    const options = dateOptions[type] || {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };

    return new Intl.DateTimeFormat(locale, options);
}

function joinClasses(list) {
    return list.filter((item) => item).join(" ") || undefined;
}

export { getDateFormat, joinClasses, langs };
