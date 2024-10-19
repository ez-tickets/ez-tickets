import { Fragment } from "react";
import deleteSVG from "../../../assets/delete.svg";
import { useSelectedOptionsStore } from "./MenuDescription.tsx";
import { selectedOptionsViewStyle } from "./style/SelectedOptionsView.css.ts";

function SelectedOptionsView() {
  const { stateOptions } = useSelectedOptionsStore();

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
              ×　数量: {option.amount}
            </p>
            <button
              type={"button"}
              className={selectedOptionsViewStyle.deleteButton}
            >
              <img src={deleteSVG} alt={"削除"} />
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default SelectedOptionsView;
