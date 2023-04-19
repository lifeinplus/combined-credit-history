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
    en: { countryCode: "gb", locale: "en-GB", nativeName: "English" },
    ru: { countryCode: "ru", locale: "ru-RU", nativeName: "Русский" },
    tr: { countryCode: "tr", locale: "tr-TR", nativeName: "Türkçe" },
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
