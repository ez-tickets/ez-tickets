import {style, keyframes} from "@vanilla-extract/css";

export const menuDetail = ({
    screen: style({
        overflow: "hidden",
        height: "100vh"
    }),

    topBar: style({
        top: "0",
        left: "0",
        zIndex: 1000,
        boxShadow: "0px 2px 5px gray",
        overflow: "scroll",
        whiteSpace: "nowrap",
    }),

    backImg: style({
        position: "absolute",
        left: "5px"
    }),

    menuTitle: style({
        textAlign: "center",
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

        ":after": {
            content: "円"
        }
    }),

    decisionButton: style({
        position: "absolute",
        bottom: "10px",
        left: "20px",
        display: "block",
        backgroundColor: "gold",
        borderRadius: "3px",
        width: "calc(100% - 10%)",
        height: "40px",
        margin: "auto"
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