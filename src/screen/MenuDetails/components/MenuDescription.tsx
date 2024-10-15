import { Fragment } from "react";
import { Link } from "react-router-dom";
import MenuSizeContainer from "./MenuSizeContainer.tsx";
import { SelectMenu } from "../../../dataTypes.ts";
import { useSlideAnimeStore } from "../../home/Home.tsx";
import { menuDescriptionStyle } from "./style/MenuDescription.css.ts";

type MenuDescriptionProps = {
    data: SelectMenu;
}

function MenuDescription({data}: MenuDescriptionProps) {
    const {changeLeftAnimation} = useSlideAnimeStore();

    return (
        <Fragment>
            <div className={menuDescriptionStyle.main}>
                <img
                    src={data.image}
                    className={menuDescriptionStyle.menuImg}
                    alt={data.name}
                />

                <p className={menuDescriptionStyle.menuDescription}>{data.description}</p>

                {data.sizes.length != 0 ? <MenuSizeContainer sizes={data.sizes}/> : ""}

                {data.options.length != 0 ?
                    <Link
                        to={"/SelectOptions"}
                        onClick={changeLeftAnimation}
                    >
                        <button className={menuDescriptionStyle.toppingButton}>Topping</button>
                    </Link> : ""
                }
            </div>
        </Fragment>
    );
}

export default MenuDescription;