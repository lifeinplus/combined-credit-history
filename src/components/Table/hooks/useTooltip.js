import { Tooltip } from "bootstrap";
import { useEffect } from "react";

const useTooltip = (tooltips, columns) => {
    useEffect(() => {
        if (!tooltips) return;

        const tooltipTriggerList = document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );

        const tooltipList = [...tooltipTriggerList].map(
            (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
        );

        return () => {
            tooltipList.forEach((element) => {
                element.hide();
            });
        };
    }, [tooltips, columns]);
};

export { useTooltip };
