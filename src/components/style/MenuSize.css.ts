import { style } from "@vanilla-extract/css";

export const menuSizeStyle = ({
    sizeContainer: style({
        padding: "10px 0",
        borderTop: "1px solid gainsboro",
        position: "relative"
    }),

    radio: style({
        position: "absolute",
        top: "25px",
        right: "10px"
    }),

    sizePrice: style({
        fontSize: "12px"
    }),
})