import { Fragment, Suspense } from "react";
import Category from "@/screen/Home/components/Category.tsx";
import { categoryNavStyle } from "@/screen/Home/components/style/CategoryNav.css.ts";

function CategoryNav() {
  return (
    <Fragment>
      <div className={categoryNavStyle.header}>
        <ul className={categoryNavStyle.menuCard}>
          <Category />
        </ul>
      </div>
    </Fragment>
  );
}

export default CategoryNav;
