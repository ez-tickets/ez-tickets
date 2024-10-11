import * as React from "react";
import { Fragment } from 'react';
import { Option } from "../dataTypes.ts";
import {optionalMenuStyle} from "./style/OptionalMenuContainer.css.ts";
import OptionalMenu from "./OptionalMenu.tsx";

type OptionalMenuContainerProps = {
    options: Option[];
};

function OptionalMenuContainer({ options }: OptionalMenuContainerProps) {

    return (
        <Fragment>
            <div className={optionalMenuStyle.menuOptionContainer}>
                <h3>Topping</h3>

                <div className={optionalMenuStyle.menuOptions}>
                    <OptionalMenu options={options} />
                </div>
            </div>
        </Fragment>
    );
}

export default OptionalMenuContainer;