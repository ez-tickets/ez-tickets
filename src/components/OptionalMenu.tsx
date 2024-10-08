import { Fragment } from 'react';
import {Option} from "../dataTypes.ts";

type OptionalMenuProps = {
    options: Option[];
};

function OptionalMenu({ options }: OptionalMenuProps) {
    return (
        <Fragment>
            {options.map((option) => (
                <label key={ option.id }>
                    <input type={"checkbox"} />{ option.name }
                </label>
            ))}
        </Fragment>
    );
}

export default OptionalMenu;