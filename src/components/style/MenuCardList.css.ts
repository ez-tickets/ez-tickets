import {style} from "@vanilla-extract/css";

export const menuCardList = ({
    //header -------------------------------------------------------------
    main: style({
        flex: "1",
        marginBottom: "40px",
        overflowY: "auto",
        padding: "20px"
    }),

    menuContainer: style({
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr));",
        placeItems: "center",
        gap: "0 15px",
        scrollSnapType: "y mandatory",
        scrollbarWidth: "thin",
    }),
})