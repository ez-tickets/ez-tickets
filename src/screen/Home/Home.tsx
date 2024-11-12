import { Fragment } from "react";
import { create } from "zustand/index";
import {
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
} from "@/global.css.ts";
import { homeStyle } from "@/screen/Home/Home.css.ts";
import CategoryNav from "@/screen/Home/components/CategoryNav.tsx";
import DecisionNav from "@/screen/Home/components/DecisionNav.tsx";
import MenuCardList from "@/screen/Home/components/MenuCardList.tsx";

type SlideAnime = {
  animation: string;
  changeTopAnimation: () => void;
  changeBottomAnimation: () => void;
  changeLeftAnimation: () => void;
  changeRightAnimation: () => void;
};

export const useSlideAnimeStore = create<SlideAnime>()((set) => ({
  animation: "",
  changeTopAnimation: () => set({ animation: slideTop }),
  changeBottomAnimation: () => set({ animation: slideBottom }),
  changeLeftAnimation: () => set({ animation: slideLeft }),
  changeRightAnimation: () => set({ animation: slideRight }),
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
