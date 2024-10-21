import { style } from "@vanilla-extract/css";

export const optionTopNavStyle = {
  screen: style({
    display: "flex",
    flexDirection: "column",
    height: "100svh",
  }),

  menuOptionContainer: style({
    borderTop: "1px solid gainsboro",
    textAlign: "center",
    flex: "1",
    marginBottom: "60px",
    overflowY: "auto",
    paddingBottom: "30px",
  }),

  menuOptions: style({
    textAlign: "left",
    padding: "0 5px",
  }),
};
