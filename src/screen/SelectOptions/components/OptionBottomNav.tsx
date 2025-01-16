import { useSelectedOptionsStore } from "@/screen/MenuDetails/components/MenuDescription.tsx";
import { useCustomizeStore } from "@/screen/MenuDetails/store/Order.ts";
import { replaceOption } from "@/screen/MenuDetails/store/action/CustomizeAction.ts";
import { optionBottomNavStyle } from "@/screen/SelectOptions/components/style/OptionBottomNav.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
