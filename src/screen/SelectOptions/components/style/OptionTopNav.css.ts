import {style} from "@vanilla-extract/css";

export const optionTopNavStyle = ({
  topBar: style({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "55px",
    zIndex: 1000,
    boxShadow: "0px 2px 5px gray",
  }),

  backImg: style({
    position: "absolute",
    top: "2.5px",
    left: "5px",
  }),

  menuTitle: style({
    textAlign: "center",
    fontSize: "24px",
  }),
})