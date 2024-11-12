import { Fragment } from "react";
import { Link } from "react-router-dom";
import { menuData } from "@/mockData.ts";
import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { menuStyle } from "@/screen/Home/components/style/Menu.css.ts";

function Menu() {
  const { changeRightAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      {menuData.map((menu) => (
        <Link to={"/MenuDetail"} key={menu.id} onClick={changeRightAnimation}>
          <div className={menuStyle.menuCard}>
            <img
              src={menu.image}
              className={menuStyle.menuImg}
              alt={menu.name}
            />
            <div className={menuStyle.menuName}>{menu.name}</div>
            <div className={menuStyle.menuPrice}>{menu.price}</div>
          </div>
        </Link>
      ))}
    </Fragment>
  );
}

export default Menu;
