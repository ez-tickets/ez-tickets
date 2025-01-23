import { style } from "@vanilla-extract/css";

export const productStyle = {
  link: style({
    width: "10.1875rem",
    marginBottom: "1.25rem",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "0.625rem",
    boxShadow: "0.125rem 0.1875rem 0.125rem lightgray",
  }),

  prod: style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
  }),

  prodImg: style({
    margin: "0 auto",
    padding: "0.0625rem",
    width: "10rem",
    height: "7.5rem",
    borderRadius: "0.625rem 0.625rem 0 0",
  }),

  prodName: style({
    width: "100%",
    padding: "0.375rem 0",
    fontSize: "0.9rem",
    textIndent: "0.5rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderBottom: "1px dashed rgba(0,0,0,0.4)",
    overflow: "hidden",
  }),

  prodPrice: style({
    padding: "0.375rem 0.625rem 0.375rem 0",
    textAlign: "right",
    borderRadius: "0 0 0.625rem 0.625rem",
    ":after": {
      content: "円",
    },
  }),
};
