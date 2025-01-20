import Contents from "@/parts/components/Contents.tsx";
import Footer from "@/parts/components/Footer.tsx";
import Header from "@/parts/components/Header.tsx";
import { screenFrameStyle } from "@/parts/components/style/ScreenFrame.css.ts";
import { Fragment, type JSX } from "react";

type ScreenFrameProps = {
  header: JSX.Element;
  contents: JSX.Element;
  footer: JSX.Element;
  headerStyle: string;
  contentsStyle: string;
  footerStyle: string;
};

function ScreenFrame({
  header,
  contents,
  footer,
  headerStyle,
  contentsStyle,
  footerStyle,
}: ScreenFrameProps) {
  return (
    <Fragment>
      <div className={screenFrameStyle.screen}>
        <Header element={header} style={headerStyle} />
        <Contents element={contents} style={contentsStyle} />
        <Footer element={footer} style={footerStyle} />
      </div>
    </Fragment>
  );
}

export default ScreenFrame;
