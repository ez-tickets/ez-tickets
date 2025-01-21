import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  userSelect: "none",
  overscrollBehavior: "none",
  height: "100svh",
  fontFamily: "Noto Sans JP",
  touchAction: "none",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("button", {
  color: "inherit",
});
