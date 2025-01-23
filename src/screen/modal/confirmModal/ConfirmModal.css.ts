import { style } from "@vanilla-extract/css";

export const confirmModalStyle = {
  text: style({
    textAlign: "center",
    fontSize: "18px",
    padding: "5px",
    borderBottom: "1px solid lightgray",
  }),

  buttonContainer: style({
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-around",
  }),
};

export const confirmModalContainer = {
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
    height: "160px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
};
