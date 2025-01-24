import { style } from "@vanilla-extract/css";

export const confirmModalStyle = {
  text: style({
    textAlign: "center",
    padding: "0.3125rem 0",
    borderBottom: "1px solid lightgray",
  }),

  buttonContainer: style({
    marginTop: "1.5625rem",
    display: "flex",
    justifyContent: "space-around",
  }),
};

export const confirmModalContainer = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 100,
  },
  content: {
    position: "relative",
    top: "50%",
    left: "50%",
    width: "22.5rem",
    height: "10rem",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
};
