import { style } from "@vanilla-extract/css";

export const orderBottomNavStyle = {
  footer: style({
    width: "100%",
    height: "100%",
    // padding: "0.8rem",
  }),

  total: style({
    marginBottom: "1rem",
    textAlign: "right",
    fontSize: "1.5rem",
    ":after": {
      content: "円",
    },
  }),
};
