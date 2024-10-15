import {style} from "@vanilla-extract/css";

export const categoryNav = ({
    header: style({
        zIndex: 1000,
        boxShadow: "0px 2px 5px gray",
    }),

    menuCard: style({
        overflowY: "scroll",
        display: "flex",
        listStyle: "none",
        fontSize: "10px",
        padding: "10px"
    }),
})