import { detailTopNavStyle } from "@/screen/productDetail/components/style/DetailTopNav.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import { IconArrowLeft } from "@tabler/icons-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type DetailTopNavProps = {
  name: string;
  setAmount: (amount: number) => void;
};

function DetailTopNav({ name, setAmount }: DetailTopNavProps) {
  const { changeLeftAnimation } = useSlideAnimeStore();

  const backHandler = () => {
    setAmount(1);
    changeLeftAnimation();
  };

  return (
    <Fragment>
      <Link to={"/"} onClick={backHandler}>
        <IconArrowLeft className={detailTopNavStyle.icon} />
      </Link>

      <h1 className={detailTopNavStyle.name}>{name}</h1>
    </Fragment>
  );
}

export default DetailTopNav;
