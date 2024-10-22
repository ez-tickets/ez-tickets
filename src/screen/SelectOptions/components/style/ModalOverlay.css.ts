import { style } from "@vanilla-extract/css";

export const modalOverlayStyle = {
  modalOverlay: style({
    position: "absolute",
    width: "100%",
    height: "100svh",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1000,
  }),

  confirmContainer: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "150px",
    backgroundColor: "white",
    border: "1px solid gray",
    borderRadius: "7px",
    boxShadow: "2px 2px 3px gray",
  }),

  text: style({
    textAlign: "center",
    fontSize: "18px",
    padding: "10px 20px",
  }),

  buttonContainer: style({
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  }),

  yesButton: style({
    width: "140px",
    padding: "5px",
    backgroundColor: "gold",
    borderRadius: "5px",
    boxShadow: "0 -1px 2px gray",
  }),

  noButton: style({
    width: "140px",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 -1px 2px gray",
  }),
};
