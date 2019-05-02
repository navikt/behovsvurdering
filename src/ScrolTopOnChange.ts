import { useEffect, useRef } from 'react';

function usePrevious(value: Object): Object | undefined {
    const ref = useRef<Object>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function useHasCangedChange(value: Object): boolean {
    let previous = usePrevious(value);
    return previous !== value;
}

export function useScrollTopOnChange(value: Object) {
    const changed = useHasCangedChange(value);

    if (changed) {
        window.scroll(0, 0);
    }
}
