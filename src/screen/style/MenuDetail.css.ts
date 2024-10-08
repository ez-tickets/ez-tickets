import {style} from "@vanilla-extract/css";

export const menuDetail = ({
    screen: style({
        overflow: "hidden",
        height: "100vh"
    }),

    topBar: style({
        display: "flex",
        width: "100%",
        height: "50px",
        zIndex: 100 //todo
    }),

    backImg: style({
        position: "absolute",
        left: "5px"
    }),

    menuTitle: style({
        margin: "auto",
    }),

    menuImg: style({
        display: "flex",
        border: "1px solid gray",
        width: "250px",
        height: "200px",
        margin: "40px auto"
    }),

    menuDescription: style({
        padding: "0 30px",
        marginBottom: "30px",
    }),

    menuOptionContainer: style({
        textAlign: "center",
        marginTop: "40px",
    }),

    menuOptions: style({
        display: "grid",
        marginTop: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr));",
        placeItems: "center",
    }),

    price: style({
        fontSize: "2rem",
        textAlign: "right",
        margin: "30px 10px 0 0",
    }),

    decisionButton: style({
        position: "absolute",
        bottom: "30px",
        left: "20px",
        display: "block",
        backgroundColor: "gold",
        borderRadius: "3px",
        width: "calc(100% - 10%)",
        height: "40px",
        margin: "auto"
    }),
})