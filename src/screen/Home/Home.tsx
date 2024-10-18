import { Fragment } from "react";
import { create } from "zustand/index";
import {
  slideLeftPage,
  slideRightPage,
} from "../MenuDetails/MenuDetail.css.ts";
import { homeStyle } from "./Home.css.ts";
import CategoryNav from "./components/CategoryNav.tsx";
import DecisionNav from "./components/DecisionNav.tsx";
import MenuCardList from "./components/MenuCardList.tsx";

type SlideAnime = {
  animation: string;
  changeLeftAnimation: () => void;
  changeRightAnimation: () => void;
};

export const useSlideAnimeStore = create<SlideAnime>()((set) => ({
  animation: "",
  changeLeftAnimation: () => set({ animation: slideLeftPage }),
  changeRightAnimation: () => set({ animation: slideRightPage }),
}));

function Home() {
  const { animation } = useSlideAnimeStore();

  return (
    <Fragment>
      <div className={animation}>
        <div className={homeStyle.parent}>
          <CategoryNav />
          <MenuCardList />
          <DecisionNav />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
