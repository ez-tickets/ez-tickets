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
    }),

    buttonContainer: style({
        display: "flex",
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: 0
    }),

    amountDisplay: style({
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: "5px"
    }),
})