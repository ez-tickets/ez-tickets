import { navBarStyle } from "@/screen/productDetail/components/style/NavBar.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import { IconArrowLeft } from "@tabler/icons-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
  name: string;
  setAmount: (amount: number) => void;
};

function NavBar({ name, setAmount }: NavBarProps) {
  const { changeLeftAnimation } = useSlideAnimeStore();

  const backHandler = () => {
    setAmount(1);
    changeLeftAnimation();
  };

  return (
    <Fragment>
      <div className={navBarStyle.navBar}>
        <Link to={"/"} onClick={backHandler}>
          <IconArrowLeft className={navBarStyle.icon} />
        </Link>

        <h1 className={navBarStyle.name}>{name}</h1>
      </div>
    </Fragment>
  );
}

export default NavBar;
