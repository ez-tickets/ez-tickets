import {style, keyframes} from "@vanilla-extract/css";

export const menuDetail = ({
    screen: style({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    }),

    topBar: style({
        position: "relative",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "55px",
        zIndex: 1000,
        boxShadow: "0px 2px 5px gray",
        whiteSpace: "nowrap",
    }),

    backImg: style({
        position: "absolute",
        top: "2.5px",
        left: "5px"
    }),

    menuTitle: style({
        textAlign: "center",
        fontSize: "24px",
    }),

    main: style({
        flex: "1",
        overflowY: "auto",
        padding: "20px"
    }),

    menuImg: style({
        display: "flex",
        border: "1px solid gray",
        width: "250px",
        height: "200px",
        margin: "20px auto"
    }),

    menuDescription: style({
        padding: "10px 30px 20px",
    }),

    buttonContainer: style({
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        padding: "60px 0 10px",
        borderTop: "1px solid rgba(0,0,0,0.2)"
    }),

    actionButton: style({
        width: "150px",
        backgroundColor: "gold",
        borderRadius: "2.5px",
        padding: "10px",
        border: "1px solid rgba(0,0,0,0.2)",
    }),
})

const slideIn = keyframes({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to  : { transform: 'translateX(0)',    opacity: 1 },
});

export const slidePage = style({
    animation: `${slideIn} 0.5s ease-in-out`,
    position: 'absolute',
    width: '100%',
    animationDuration: "0.4s",
});