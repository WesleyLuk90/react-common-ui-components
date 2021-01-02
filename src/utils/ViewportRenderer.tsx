import React, {
    ReactNode,
    RefObject,
    useEffect,
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
} from "react";

export function ViewportRenderer<T>({
    items,
    children,
}: {
    items: T[];
    children: (t: T) => ReactNode;
}) {
    const [topHeight, setTopHeight] = useState(0);
    const [bottomHeight, setBottomHeight] = useState(0);
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(100);

    const first = useRef<HTMLDivElement>(null);
    const last = useRef<HTMLDivElement>(null);

    function ref(index: number) {
        if (index == 0) {
            return first;
        }
        if (index == limit - 1) {
            return last;
        }
        return undefined;
    }

    useLayoutEffect(() => {
        console.log("Run layout");
        limitViewport();
    });

    function limitViewport() {
        const top = first.current?.getBoundingClientRect()?.top;
        const bottom = last.current?.getBoundingClientRect()?.bottom;
        if (top == null || bottom == null) {
            return;
        }
        const renderedHeight = bottom - top;
        if (renderedHeight <= 0) {
            return;
        }
        const renderedItems = Math.max(
            Math.min(items.length - start, limit),
            0
        );
        const bottomItems = Math.max(items.length - start - limit, 0);
        const averageHeight = renderedHeight / renderedItems;
        setBottomHeight(averageHeight * bottomItems);
    }

    function updateVisible() {}

    useEffect(() => {
        function onScroll() {
            updateVisible();
        }
        window.addEventListener("scroll", onScroll, true);
        return () => window.removeEventListener("scroll", onScroll);
    });
    return (
        <div>
            <div style={{ height: topHeight }} />
            {items.slice(start, start + limit).map((t, i) => (
                <div key={start + i} ref={ref(i)}>
                    {children(t)}
                </div>
            ))}
            <div
                style={{
                    height: bottomHeight,
                }}
            />
        </div>
    );
}
