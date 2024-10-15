import { style } from "@vanilla-extract/css";

export const orderAmountStyle = {
    amountContainer: style({
        position: "absolute",
        top: "15px",
        left: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),

    text: style({
        marginRight: "18px"
    }),

    decrementButton: style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "10px",
    }),

    incrementButton: style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px"
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
}