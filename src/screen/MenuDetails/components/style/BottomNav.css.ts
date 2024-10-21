import { style } from "@vanilla-extract/css";

export const bottomNavStyle = {
  buttonContainer: style({
    backgroundColor: "white",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-around",
    marginTop: "60px",
    padding: "60px 0 10px",
    borderTop: "1px solid rgba(0,0,0,0.2)",
  }),

  amountContainer: style({
    position: "absolute",
    top: "15px",
    left: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  text: style({
    marginRight: "18px",
  }),

  amountDisplay: style({
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "5px",
  }),
};
