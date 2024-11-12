import { Fragment } from "react";
import trashSVG from "@/assets/trash.svg";
import { useCustomizeStore } from "@/screen/MenuDetails/store/Order.ts";
import { replaceOption } from "@/screen/MenuDetails/store/action/CustomizeAction.ts";
import { useSelectedOptionsStore } from "@/screen/MenuDetails/components/MenuDescription.tsx";
import { selectedOptionsViewStyle } from "@/screen/MenuDetails/components/style/SelectedOptionsView.css.ts";

function SelectedOptionsView() {
  const {
    initOptions,
    stateOptions,
    stateOptionsAddHandler,
    initOptionsAddHandler,
  } = useSelectedOptionsStore();
  const { customizeDispatch } = useCustomizeStore();

  const deleteHandler = (id: string) => {
    const deleteOptions = stateOptions.filter((option) => option.id !== id);
    const deleteAmount = initOptions.map((option) => {
      return option.id === id ? { ...option, amount: 0 } : option;
    });
    initOptionsAddHandler(deleteAmount);
    stateOptionsAddHandler(deleteOptions);
    customizeDispatch(replaceOption(deleteOptions));
  };

  return (
    <Fragment>
      <div className={selectedOptionsViewStyle.container}>
        {stateOptions.map((option) => (
          <div className={selectedOptionsViewStyle.optionItem} key={option.id}>
            <p>{option.name}</p>
            <p className={selectedOptionsViewStyle.priceText}>
              +{option.price}円
            </p>
            <p className={selectedOptionsViewStyle.amountText}>
              ×　数量 {option.amount}
            </p>
            <button
              type={"button"}
              className={selectedOptionsViewStyle.deleteButton}
              onClick={() => {
                deleteHandler(option.id);
              }}
            >
              <img src={trashSVG} alt="削除" />
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default SelectedOptionsView;
