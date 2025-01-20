import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  overscrollBehavior: "none",
  height: "100svh",
});

globalStyle("a", {
  textDecoration: "none",
  userSelect: "none",
  color: "inherit",
});

globalStyle("button", {
  color: "inherit",
});
