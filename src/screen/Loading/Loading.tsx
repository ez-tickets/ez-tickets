import React, { Fragment } from "react";
import { loadingAnime, loadingStyle } from "@/screen/Loading/Loading.css";

function Loading() {
  return (
    <Fragment>
      <div className={loadingStyle.screen}>
        <h1 className={loadingAnime}>Loading...</h1>
      </div>
    </Fragment>
  );
}

export default Loading;
