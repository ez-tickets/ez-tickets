import { Fragment, useEffect } from "react";
import { selectMenuData1, selectMenuData2 } from "@/mockData.ts";
import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { topNavStyle } from "@/screen/MenuDetails/MenuDetail.css.ts";
import BottomNav from "@/screen/MenuDetails/components/BottomNav.tsx";
import MenuDescription from "@/screen/MenuDetails/components/MenuDescription.tsx";
import TopNav from "@/screen/MenuDetails/components/TopNav.tsx";
import { useCustomizeStore } from "@/screen/MenuDetails/store/Order.ts";
import { initialize } from "@/screen/MenuDetails/store/action/CustomizeAction.ts";

// fixme: IDを指定して商品ごとのデータを得るようにする
// 多分fetchはSWRを使うことになると思う
function MenuDetail(/* {id} */) {
  const getData = selectMenuData2;
  const { customizeDispatch } = useCustomizeStore();
  const { animation } = useSlideAnimeStore();

  // コンポーネントの初期化時だけで呼ばれてほしいため
  // biome-ignore lint: react-hooks/exhaustive-deps
  useEffect(() => {
    customizeDispatch(initialize(getData));
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
