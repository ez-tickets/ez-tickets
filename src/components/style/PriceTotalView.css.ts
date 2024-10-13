import {style} from "@vanilla-extract/css";

export const priceTotalViewStyle = ({
    total: style({
        position: "absolute",
        top: "10px",
        right: "20px",
        fontSize: "1.5rem",
        textAlign: "right",

        ":after": {
            content: "円"
        }
    }),
})