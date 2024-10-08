import {style} from "@vanilla-extract/css";

export const categoryNav = ({
    header: style({
        top: "0",
        left: "0",
        zIndex: 1000,
        boxShadow: "0px 2px 5px gray",
        overflow: "scroll",
        whiteSpace: "nowrap",
        overflowX: "auto",
    }),

    menuCard: style({
        overflowY: "scroll",
        display: "flex",
        listStyle: "none",
        fontSize: "10px",
        padding: "10px"
    }),
})