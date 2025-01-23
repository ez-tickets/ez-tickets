import { style } from "@vanilla-extract/css";

export const editModalStyle = {
  editContainer: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  }),

  name: style({
    padding: "5px",
    textAlign: "center",
    fontSize: "18px",
    borderBottom: "1px dotted gray",
  }),

  text: style({
    marginRight: "50px",
  }),

  buttonContainer: style({
    display: "flex",
    justifyContent: "center",
  }),

  decrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.625rem",
    color: "#565656",
  }),

  limitDecrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.625rem",
    color: "lightgray",
  }),

  incrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.625rem",
    color: "#565656",
  }),

  limitIncrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.625rem",
    color: "lightgray",
  }),

  amount: style({
    width: "1.875rem",
    height: "1.875rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "0.3125rem",
  }),
};

export const editModalContainer = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 100,
  },
  content: {
    position: "relative",
    top: "50%",
    left: "50%",
    width: "360px",
    height: "200px",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
  },
};
