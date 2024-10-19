import { Fragment, useEffect } from "react";
import { selectMenuData1, selectMenuData2 } from "../../mockData.ts";
import { useSlideAnimeStore } from "../Home/Home.tsx";
import { topNavStyle } from "./MenuDetail.css.ts";
import BottomNav from "./components/BottomNav.tsx";
import MenuDescription from "./components/MenuDescription.tsx";
import TopNav from "./components/TopNav.tsx";
import { useOrderStore } from "./store/Order.ts";
import { initialize } from "./store/action/OrderAction.ts";

// fixme: IDを指定して商品ごとのデータを得るようにする
// 多分fetchはSWRを使うことになると思う
function MenuDetail(/* {id} */) {
  const getData = selectMenuData1;
  const { dispatch } = useOrderStore();
  const { animation } = useSlideAnimeStore();

  // コンポーネントの初期化時だけで呼ばれてほしいため
  // biome-ignore lint: react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(initialize(getData.id, getData.price));
  }, []);

  return (
    <Fragment>
      <div className={animation}>
        <div className={topNavStyle.screen}>
          <TopNav menuName={getData.name} />
          <MenuDescription data={getData} />
          <BottomNav options={getData.options} />
        </div>
      </div>
    </Fragment>
  );
}

export default MenuDetail;
