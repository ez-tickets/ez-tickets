import {style} from "@vanilla-extract/css";

export const optionalMenuStyle = ({
    optionContainer: style({
        margin: "10px 0",
        borderBottom: "1px solid gainsboro",
        position: "relative"
    }),

    checkBox: style({
        position: "absolute",
        top: "10px",
        right: "10px"
    }),

    optionPrice: style({
        fontSize: "12px"
    })
})