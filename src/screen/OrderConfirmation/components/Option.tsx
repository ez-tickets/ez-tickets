import React, { Fragment } from "react";
import type { SelectOption } from "@/dataTypes.ts";
import { optionStyle } from "@/screen/OrderConfirmation/components/style/Option.css.ts";

type OptionProps = {
  option: SelectOption;
};

function Option({ option }: OptionProps) {
  return (
    <Fragment>
      <div className={optionStyle.orderOption} key={option.id}>
        <ul>
          <li className={optionStyle.optionList}>
            <span>{option.name}</span>
            <p>+{option.price}円</p>
            <p className={optionStyle.optionPrice}>× 数量 {option.amount}</p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Option;
