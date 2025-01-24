import { style } from "@vanilla-extract/css";

export const orderBottomNavStyle = {
  footer: style({
    width: "90%",
    height: "100%",
  }),

  totalContainer: style({
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  }),

  total: style({
    width: "100%",
    fontSize: "1.5rem",
    textAlign: "right",
    ":after": {
      content: "円",
    },
  }),

  link: style({
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};
