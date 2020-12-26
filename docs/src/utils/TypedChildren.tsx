import { ReactElement } from "react";

export type TypedChildren<T> =
    | Array<ReactElement<T>>
    | ReactElement<T>
    | undefined;
