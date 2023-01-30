import { format } from "date-fns";

const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Русский" },
};

function formatHeader(isoDate) {
    const date = new Date(isoDate);
    return format(date, "dd-MM-yyyy HH:mm:ss");
}

function joinClasses(classes) {
    return classes.filter((item) => item).join(" ");
}

export { formatHeader, joinClasses, lngs };
