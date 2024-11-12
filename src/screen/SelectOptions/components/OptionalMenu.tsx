import { Fragment } from "react";
import decrementSVG from "@/assets/decrement.svg";
import decrementLimitSVG from "@/assets/decrementLimit.svg";
import incrementSVG from "@/assets/increment.svg";
import incrementLimitSVG from "@/assets/incrementLimit.svg";
import { useSelectedOptionsStore } from "@/screen/MenuDetails/components/MenuDescription.tsx";
import { optionalMenuStyle } from "@/screen/SelectOptions/components/style/OptionalMenu.css.ts";

function OptionalMenu() {
  const maxAmount = 5;
  const minAmount = 0;
  const { initOptions, initOptionsAddHandler } = useSelectedOptionsStore();

  const incrementHandler = (id: string) => {
    const newOption = [...initOptions].map((option) => {
      return option.id === id
        ? { ...option, amount: option.amount + 1 }
        : option;
    });
    initOptionsAddHandler(newOption);
  };

  const decrementHandler = (id: string) => {
    const newOption = [...initOptions].map((option) => {
      return option.id === id
        ? { ...option, amount: option.amount - 1 }
        : option;
    });
    initOptionsAddHandler(newOption);
  };

  return (
    <Fragment>
      {initOptions.map((option) => {
        return (
          <div className={optionalMenuStyle.optionContainer} key={option.id}>
            <span>{option.name}</span>
            <p className={optionalMenuStyle.optionPrice}>+{option.price}円</p>

            <div className={optionalMenuStyle.buttonContainer}>
              <button
                type={"button"}
                className={optionalMenuStyle.decrementButton}
                onClick={() => {
                  decrementHandler(option.id);
                }}
                disabled={option.amount <= minAmount}
              >
                {option.amount <= minAmount ? (
                  <img src={decrementLimitSVG} alt="減らせません" />
                ) : (
                  <img src={decrementSVG} alt="減らす" />
                )}
              </button>

              <div className={optionalMenuStyle.amountDisplay}>
                {option.amount}
              </div>

              <button
                type={"button"}
                className={optionalMenuStyle.incrementButton}
                onClick={() => {
                  incrementHandler(option.id);
                }}
                disabled={option.amount >= maxAmount}
              >
                {option.amount >= maxAmount ? (
                  <img src={incrementLimitSVG} alt="増やせません" />
                ) : (
                  <img src={incrementSVG} alt="増やす" />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default OptionalMenu;
