import { useEffect, useRef } from "react";

const useTableScroll = (scrolling) => {
    const scrollWrapperRef = useRef(null);

    const btnRefs = {
        btnStart: useRef(null),
        btnLeft: useRef(null),
        btnRight: useRef(null),
        btnEnd: useRef(null),
    };

    const handleScroll = ({ altKey, key, target, type }) => {
        const wrapper = scrollWrapperRef.current;

        if (!wrapper || !scrolling) return;

        const { btnStart, btnLeft, btnRight, btnEnd } = btnRefs;
        const button = type === "click" && target.closest("button");
        const id = button?.id;

        if (id === "btnStart" || (altKey && key === "ArrowLeft")) {
            btnStart.current?.focus();
            wrapper.scrollLeft = 0;
        }

        if (id === "btnLeft" || (!altKey && key === "ArrowLeft")) {
            btnLeft.current?.focus();
            const { clientWidth, scrollLeft } = wrapper;
            const scrollNew = scrollLeft - (clientWidth * 3) / 4;
            wrapper.scrollLeft = scrollNew > 0 ? scrollNew : 0;
        }

        if (id === "btnRight" || (!altKey && key === "ArrowRight")) {
            btnRight.current?.focus();
            const { clientWidth } = wrapper;
            wrapper.scrollLeft += (clientWidth * 3) / 4;
        }

        if (id === "btnEnd" || (altKey && key === "ArrowRight")) {
            btnEnd.current?.focus();
            wrapper.scrollLeft += wrapper.scrollWidth;
        }
    };

    const handleKeyUp = function ({ altKey, key }) {
        const { btnStart, btnLeft, btnRight, btnEnd } = btnRefs;

        if (altKey && key === "ArrowLeft") {
            blurTimeout(btnStart);
        }

        if (!altKey && key === "ArrowLeft") {
            blurTimeout(btnLeft);
        }

        if (!altKey && key === "ArrowRight") {
            blurTimeout(btnRight);
        }

        if (altKey && key === "ArrowRight") {
            blurTimeout(btnEnd);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleScroll);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleScroll);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [scrollWrapperRef.current]);

    return [scrollWrapperRef, btnRefs, handleScroll];
};

function blurTimeout(btnRef) {
    setTimeout(() => {
        btnRef.current?.blur();
    }, 100);
}

export { useTableScroll };
