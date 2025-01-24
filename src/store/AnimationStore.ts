import {
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
} from "@/parts/components/style/AnimationFrame.css.ts";
import { create } from "zustand/index";

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
