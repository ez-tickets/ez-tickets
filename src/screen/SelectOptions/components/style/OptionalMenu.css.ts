import {style} from "@vanilla-extract/css";

export const optionalMenuStyle = ({
    optionContainer: style({
        padding: "10px 0",
        borderTop: "1px solid gainsboro",
        position: "relative"
    }),

    checkBox: style({
        position: "absolute",
        top: "25px",
        right: "10px"
    }),

    optionPrice: style({
        fontSize: "12px"
    })
})