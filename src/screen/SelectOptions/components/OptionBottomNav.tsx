import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelectedOptionsStore } from "../../MenuDetails/components/MenuDescription.tsx";
import { useCustomizeStore } from "../../MenuDetails/store/Order.ts";
import { replaceOption } from "../../MenuDetails/store/action/CustomizeAction.ts";
import { optionBottomNavStyle } from "./style/OptionBottomNav.css.ts";

function OptionBottomNav() {
  const { customizeDispatch } = useCustomizeStore();
  const { initOptions, stateOptionsAddHandler } = useSelectedOptionsStore();

  const confirmedHandler = () => {
    const selectedOption = initOptions.filter((item) => item.amount > 0);
    stateOptionsAddHandler(selectedOption);
    customizeDispatch(replaceOption(selectedOption));

    toast.success("トッピングを追加しました");
  };

  return (
    <Fragment>
      <div className={optionBottomNavStyle.footer}>
        <Link to={"/MenuDetail"}>
          <button
            type={"button"}
            className={optionBottomNavStyle.confirmButton}
            onClick={confirmedHandler}
          >
            追加・変更する
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default OptionBottomNav;
