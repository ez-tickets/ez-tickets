import { style } from "@vanilla-extract/css";

export const home = ({
    parent: style({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    }),

    footer: style({
        backgroundColor: "aqua",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "1"
    }),
});