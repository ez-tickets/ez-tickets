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
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px"
    }),
}