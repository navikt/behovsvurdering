import {useEffect, useRef} from "react";

export function usePrevious(value: Object): Object | undefined {
    const ref = useRef<Object>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export function useHasCangedChange(value: Object): boolean {
    let previous = usePrevious(value);
    return previous !== value;
}

export function useScrollTopOnChange(value: Object) {
    let changed = useHasCangedChange(value);

    if(changed) {
        window.scroll(0,0);
    }
}
