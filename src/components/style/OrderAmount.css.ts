import {style} from "@vanilla-extract/css";

export const orderAmount = {
    amountContainer: style({
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
    }),

    decrementButton: style({
        marginRight: "10px"
    }),

    incrementButton: style({
        marginLeft: "10px"
    }),

    amountDisplay: style({
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: "5px"
    }),
}