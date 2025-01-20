import { style } from "@vanilla-extract/css";

export const prodDescStyle = {
  prodContainer: style({
    padding: "5px",
  }),

  img: style({
    display: "flex",
    border: "1px solid gray",
    maxWidth: "100%",
    maxHeight: "50%",
    margin: "20px auto",
    aspectRatio: "4/3",
  }),

  desc: style({
    padding: "0 10px",
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
