import { Fragment } from 'react';
import { Option } from "../dataTypes.ts";
import { optionalMenuContainerStyle } from "./style/OptionalMenuContainer.css.ts";
import OptionalMenu from "./OptionalMenu.tsx";

type OptionalMenuContainerProps = {
    options: Option[];
};

function OptionalMenuContainer({ options }: OptionalMenuContainerProps) {

    return (
        <Fragment>
            <div className={optionalMenuContainerStyle.menuOptionContainer}>
                <h3>Topping</h3>

                <div className={optionalMenuContainerStyle.menuOptions}>
                    <OptionalMenu options={options} />
                </div>
            </div>
        </Fragment>
    );
}

export default OptionalMenuContainer;