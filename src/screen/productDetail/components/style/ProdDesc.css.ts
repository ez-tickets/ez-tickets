import { style } from "@vanilla-extract/css";

export const prodDescStyle = {
  prodContainer: style({
    padding: "0.3125rem",
  }),

  img: style({
    position: "relative",
    width: "100%",
    height: "50%",
    aspectRatio: "4/3",
    marginBottom: "1rem",
    display: "flex",
    backgroundColor: "#f6f6f6",
    border: "0.0625rem dashed gray",
    ":before": {
      content: "No Image",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "0.75rem",
    },
  }),

  desc: style({
    padding: "0 0.625rem",
  }),

  price: style({
    fontSize: "1.5rem",
    padding: "1rem",
    textAlign: "right",
    ":after": {
      content: "円",
    },
  }),
};
