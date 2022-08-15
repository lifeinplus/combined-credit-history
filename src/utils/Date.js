import { format } from "date-fns";

function formatHeader(isoDate) {
    const date = new Date(isoDate);
    return format(date, "dd-MM-yyyy HH:mm:ss");
}

export { formatHeader };
