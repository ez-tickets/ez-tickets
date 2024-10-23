import { style } from "@vanilla-extract/css";

export const orderBottomNavStyle = {
  footer: style({
    backgroundColor: "white",
    textAlign: "center",
    padding: "60px 20px 10px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: 1,
    boxShadow: "0 -1px 2px gray",
  }),

  total: style({
    position: "absolute",
    top: "10px",
    right: "20px",
    fontSize: "1.5rem",
    textAlign: "right",

    ":after": {
      content: "円",
    },
  }),

  confirmButton: style({
    padding: "10px 20px",
    backgroundColor: "gold",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    width: "100%",
  }),
};
