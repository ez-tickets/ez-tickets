import { style } from "@vanilla-extract/css";

export const footerStyle = {
  homeFrame: style({
    position: "absolute",
    top: "89%",
    left: 0,
    width: "100%",
    height: "11svh",
    boxShadow: "0.0625rem -0.125rem 0.125rem rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,

    // backgroundColor: "skyblue"
  }),

  detailFrame: style({
    position: "absolute",
    top: "85%",
    left: 0,
    width: "100%",
    height: "15svh",
    boxShadow: "0.0625rem -0.125rem 0.125rem rgba(0,0,0,0.4)",
    zIndex: 100,
    overflow: "scroll",

    // backgroundColor: "skyblue"
  }),

  confirmFrame: style({
    position: "absolute",
    top: "85%",
    left: 0,
    width: "100%",
    height: "15svh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0.0625rem -0.125rem 0.125rem rgba(0,0,0,0.4)",
    zIndex: 100,

    // backgroundColor: "skyblue"
  }),
};
