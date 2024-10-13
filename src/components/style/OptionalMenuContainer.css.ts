import {style} from "@vanilla-extract/css";

export const optionalMenuContainerStyle = ({
    menuOptionContainer: style({
        borderTop: "1px solid gainsboro",
        textAlign: "center",
        paddingTop: "20px",
    }),

    menuOptions: style({
        marginTop: "20px",
        textAlign: "left"
    }),
})