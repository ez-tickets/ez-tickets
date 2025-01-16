import { style } from "@vanilla-extract/css";

export const productStyle = {
  prod: style({
    display: "flex",
    flexDirection: "column",
    width: "160px",
    height: "178px",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid rgba(0,0,0,0.3)",
    boxShadow: "0 0 2px rgba(0,0,0,0.2)",
  }),

  prodImg: style({
    borderRadius: "10px 10px 0 0",
    width: "158px",
    height: "150px",
  }),

  prodName: style({
    // backgroundColor: "yellow",
    padding: "5px 0",
    paddingLeft: "10px",
  }),

  prodPrice: style({
    // backgroundColor: "greenyellow",
    padding: "6px 0",
    borderRadius: "0 0 10px 10px",
    textAlign: "right",
    paddingRight: "10px",
    ":after": {
      content: "円",
    },
  }),
};
