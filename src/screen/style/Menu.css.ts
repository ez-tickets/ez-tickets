import { style } from "@vanilla-extract/css";

export const menu = ({
    parent: style({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    }),

    //header -------------------------------------------------------------
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

    li: style({
        padding: "10px",
    }),

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

    //menu -------------------------------------------------------------------
    menu: style({
        display: "flex",
        flexDirection: "column",
        width: "160px",
        height: "178px",
        borderRadius: "10px",
        marginBottom: "20px",
        border: "1px solid gray",
    }),

    menuImg: style({
        borderRadius: "10px 10px 0 0",
        width: "158px",
        height: "150px"
    }),

    menuName: style({
        backgroundColor: "yellow",
        padding: "5px 0",
        paddingLeft: "10px",
    }),

    menuPrice: style({
        backgroundColor: "greenyellow",
        padding: "6px 0",
        borderRadius: "0 0 10px 10px",
        textAlign: "right",
        paddingRight: "10px"
    }),

    //footer ------------------------------------------------------------------
    footer: style({
        backgroundColor: "aqua",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "1"
    })
});