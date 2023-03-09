import { useEffect, useRef } from "react";

const useStickyHeader = (sticky) => {
    const tableWrapperRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current && sticky) {
            headerRef.current.style.removeProperty("transform");

            const translate = () => {
                if (!tableWrapperRef.current || !headerRef.current) {
                    return;
                }

                const scroll = window.pageYOffset;
                const header = headerRef.current;
                const tableWrapper = tableWrapperRef.current;

                const top = tableWrapper.offsetTop;

                if (scroll > top) {
                    const yTranslation = Math.ceil(Math.abs(scroll - top)) - 1;
                    header.style.setProperty(
                        "transform",
                        `translateY(${yTranslation}px)`
                    );
                } else {
                    header.style.removeProperty("transform");
                }
            };

            window.addEventListener("scroll", translate);

            return () => {
                window.removeEventListener("scroll", translate);
                headerRef.current?.style.removeProperty("transform");
            };
        }

        return () => {
            headerRef.current?.style.removeProperty("transform");
        };
    }, [tableWrapperRef.current, headerRef.current]);

    return [tableWrapperRef, headerRef];
};

export { useStickyHeader };
