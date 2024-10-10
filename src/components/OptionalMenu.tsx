import {ChangeEvent, Fragment, useState} from 'react';
import {Cart, Option, Order} from "../dataTypes.ts";
import * as React from "react";

type OptionalMenuProps = {
    options: Option[];
};

function OptionalMenu({ options }: OptionalMenuProps) {
    const optionList: Order[] = [];

    const selectedOptions = (e: React.ChangeEvent, id: string, name: string) => {
            const flag = optionList.some(obj => obj.id === id); //false: 含まれている, true: 含まれていない

            if (!flag) {
                optionList.push({id: id, options: name});
                console.log(optionList);
            } else {
                for (let i = 0; i < optionList.length; i++) {
                    if (optionList[i].id === id) {
                        optionList.splice(i, 1);
                    }
                }
                console.log(optionList);
            }
    }

    return (
        <Fragment>
            {options.map((option) => (
                <label key={ option.id }>
                    <input
                        type={"checkbox"}
                        onChange={(e) => selectedOptions(e, option.id, option.name)}
                    />
                    { option.name }
                </label>
            ))}
        </Fragment>
    );
}

export default OptionalMenu;