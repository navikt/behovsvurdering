import * as React from "react";

interface BehovsvurderingsContainerProps {
    children: null | React.ReactNode | React.ReactChild | React.ReactChildren
}

function BehovsvurderingsContainer (props: BehovsvurderingsContainerProps) {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}


export default BehovsvurderingsContainer;