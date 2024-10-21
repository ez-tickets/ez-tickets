import { style } from "@vanilla-extract/css";

export const optionBottomNavStyle = {
  footer: style({
    backgroundColor: "white",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: 1,
    boxShadow: "0 -1px 2px gray",
  }),

  confirmButton: style({
    padding: "10px 20px",
    backgroundColor: "gold",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    width: "100%",
  }),
};
