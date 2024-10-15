import {keyframes, style} from "@vanilla-extract/css";

export const optionsStyle = ({
    menuOptionContainer: style({
        borderTop: "1px solid gainsboro",
        textAlign: "center",
    }),

    menuOptions: style({
        textAlign: "left",
        padding: "0 5px"
    }),
})