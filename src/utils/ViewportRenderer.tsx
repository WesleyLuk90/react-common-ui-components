import React, {
    MutableRefObject,
    ReactElement,
    ReactNode,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { clamp } from "./numbers";

const PAGE_SIZE = 100;

interface Render {
    first: number;
    last: number;
    averageHeight: number;
}

function computeStartEndIndex(
    scrollTop: number,
    avgHeight: number,
    windowMax: number
): [number, number] {
    const first =
        Math.floor(Math.max(-scrollTop, 0) / avgHeight / PAGE_SIZE) * PAGE_SIZE;
    const last =
        Math.ceil(
            (Math.max(-scrollTop, 0) + windowMax) / avgHeight / PAGE_SIZE
        ) * PAGE_SIZE;
    return [first, last];
}

function updateVisible<T>(
    items: T[],
    firstDiv: MutableRefObject<HTMLDivElement | null>,
    lastDiv: MutableRefObject<HTMLDivElement | null>,
    renderRef: MutableRefObject<Render>,
    setRender: (r: Render) => void
) {
    if (items.length < PAGE_SIZE) {
        setRender({
            first: 0,
            last: PAGE_SIZE,
            averageHeight: 0,
        });
        return;
    }
    let { first, last } = renderRef.current;
    const top = firstDiv.current?.getBoundingClientRect()?.top;
    const bottom = lastDiv.current?.getBoundingClientRect()?.bottom;
    if (top == null || bottom == null) {
        return;
    }
    const renderedHeight = bottom - top;
    if (renderedHeight <= 0) {
        return;
    }
    const newAverageHeight = renderedHeight / (last - first);
    const estimatedTop = top - first * newAverageHeight;
    const [newFirst, newLast] = computeStartEndIndex(
        estimatedTop,
        newAverageHeight,
        window.innerHeight
    );
    first = clamp(newFirst, 0, items.length);
    last = clamp(newLast, 0, items.length);
    if (
        first !== renderRef.current.first ||
        last !== renderRef.current.last ||
        (renderRef.current.averageHeight == 0 && newAverageHeight > 0)
    ) {
        setRender({
            first,
            last,
            averageHeight: newAverageHeight,
        });
    }
}

export function ViewportRenderer<T>({
    items,
    children,
}: {
    items: T[];
    children: (t: T) => ReactNode;
}): ReactElement {
    const [render, setRender] = useState<Render>({
        first: 0,
        last: PAGE_SIZE,
        averageHeight: 0,
    });

    const firstDiv = useRef<HTMLDivElement>(null);
    const lastDiv = useRef<HTMLDivElement>(null);
    const renderRef = useRef(render);
    renderRef.current = render;

    function ref(index: number) {
        if (index === 0) {
            return firstDiv;
        }
        if (index === render.last - render.first - 1) {
            return lastDiv;
        }
        return undefined;
    }

    useLayoutEffect(
        () => updateVisible(items, firstDiv, lastDiv, renderRef, setRender),
        [items]
    );

    useEffect(() => {
        function onScroll() {
            updateVisible(items, firstDiv, lastDiv, renderRef, setRender);
        }
        window.addEventListener("scroll", onScroll, true);
        return () => window.removeEventListener("scroll", onScroll);
    }, [items]);

    return (
        <>
            <div style={{ height: render.first * render.averageHeight }} />
            {items.slice(render.first, render.last).map((t, i) => (
                <div key={render.first + i} ref={ref(i)}>
                    {children(t)}
                </div>
            ))}
            <div
                style={{
                    height: (items.length - render.last) * render.averageHeight,
                }}
            />
        </>
    );
}
