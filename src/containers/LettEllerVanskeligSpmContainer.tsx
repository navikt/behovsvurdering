import * as React from "react";

interface LettEllerVanskeligSpmContainerProps {
    children: null | React.ReactNode | React.ReactChild | React.ReactChildren
}

function LettEllerVanskeligSpmContainer (props: LettEllerVanskeligSpmContainerProps) {
    return (
        <div className="lettEllerVanskeligWrapper">
            {
                props.children
            }
        </div>
    )
}

export default LettEllerVanskeligSpmContainer;