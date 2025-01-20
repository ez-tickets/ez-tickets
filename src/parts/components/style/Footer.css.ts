import { style } from "@vanilla-extract/css";

export const footerStyle = {
  homeFrame: style({
    position: "absolute",
    top: "89%",
    left: 0,
    width: "100%",
    maxHeight: "11svh",
    boxShadow: "1px -2px 2px rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "skyblue"
  }),

  detailFrame: style({
    position: "absolute",
    top: "85%",
    left: 0,
    width: "100%",
    maxHeight: "15%",
    boxShadow: "1px -2px 2px rgba(0,0,0,0.4)",

    // backgroundColor: "skyblue"
  }),
};
