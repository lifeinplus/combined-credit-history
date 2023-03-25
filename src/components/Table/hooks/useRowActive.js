import { useMemo } from "react";

const useRowActive = (rowActive, data) => {
    return useMemo(() => {
        return rowActive
            ? data.map((element, index) => ({
                  ...element,
                  activeId: String(index),
              }))
            : data;
    }, [rowActive, data]);
};

export { useRowActive };
