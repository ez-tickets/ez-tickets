import {style} from "@vanilla-extract/css";

export const optionalMenuStyle = ({
    menuOptionContainer: style({
        textAlign: "center",
        marginTop: "40px",
    }),

    menuOptions: style({
        marginTop: "20px",
        textAlign: "left"
    }),
})