import * as React from 'react';
import SisteStilling from "./SisteStilling";
import BoligInformasjon from "./BoligInformasjon";


function StillingInfo(){
    return (
        <div className= "stillingContainer">
            <SisteStilling/>
            <BoligInformasjon/>
        </div>
    )
}

export default StillingInfo;