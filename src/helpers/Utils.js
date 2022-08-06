import { format } from "date-fns";

function formatHeaderDate(isoDate) {
    const date = new Date(isoDate);
    return format(date, "yyyy-MM-dd HH:mm:ss");
}

export { formatHeaderDate };
