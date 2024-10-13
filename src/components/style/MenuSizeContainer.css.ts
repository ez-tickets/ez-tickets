import {style} from "@vanilla-extract/css";

export const menuSizeContainerStyle = ({
    menuSizeContainer: style({
        borderTop: "1px solid gainsboro",
        textAlign: "center",
        paddingTop: "20px",
    }),

    menuSize: style({
        marginTop: "20px",
        textAlign: "left"
    }),
})