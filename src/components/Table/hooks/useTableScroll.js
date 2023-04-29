import { useCallback, useEffect, useRef } from "react";

const useTableScroll = (scrolling) => {
    const scrollWrapperRef = useRef(null);

    const btnStartRef = useRef(null);
    const btnLeftRef = useRef(null);
    const btnRightRef = useRef(null);
    const btnEndRef = useRef(null);

    const handleScroll = useCallback(
        ({ altKey, key, target, type }) => {
            const wrapper = scrollWrapperRef.current;

            if (!wrapper || !scrolling) return;

            const button = type === "click" && target.closest("button");
            const id = button?.id;

            if (id === "btnStart" || (altKey && key === "ArrowLeft")) {
                btnStartRef.current?.focus();
                wrapper.scrollLeft = 0;
            }

            if (id === "btnLeft" || (!altKey && key === "ArrowLeft")) {
                btnLeftRef.current?.focus();
                const { clientWidth, scrollLeft } = wrapper;
                const scrollNew = scrollLeft - (clientWidth * 3) / 4;
                wrapper.scrollLeft = scrollNew > 0 ? scrollNew : 0;
            }

            if (id === "btnRight" || (!altKey && key === "ArrowRight")) {
                btnRightRef.current?.focus();
                const { clientWidth } = wrapper;
                wrapper.scrollLeft += (clientWidth * 3) / 4;
            }

            if (id === "btnEnd" || (altKey && key === "ArrowRight")) {
                btnEndRef.current?.focus();
                wrapper.scrollLeft += wrapper.scrollWidth;
            }
        },
        [scrolling]
    );

    const handleKeyUp = useCallback(function ({ altKey, key }) {
        if (altKey && key === "ArrowLeft") {
            blurTimeout(btnStartRef);
        }

        if (!altKey && key === "ArrowLeft") {
            blurTimeout(btnLeftRef);
        }

        if (!altKey && key === "ArrowRight") {
            blurTimeout(btnRightRef);
        }

        if (altKey && key === "ArrowRight") {
            blurTimeout(btnEndRef);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleScroll);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleScroll);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [handleScroll, handleKeyUp]);

    const btnRefs = {
        btnStartRef,
        btnLeftRef,
        btnRightRef,
        btnEndRef,
    };

    return [scrollWrapperRef, btnRefs, handleScroll];
};

function blurTimeout(btnRef) {
    setTimeout(() => {
        btnRef.current?.blur();
    }, 100);
}

export { useTableScroll };
