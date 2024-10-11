import { keyframes, style} from "@vanilla-extract/css";

export const home = ({
    parent: style({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    }),

    footer: style({
        // backgroundColor: "#ffd700", //カートの中に商品が入っている時の色
        backgroundColor: "lightgray",  //注文の品がない時の色
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "1",
        boxShadow: "0 -1px 2px gray"
    }),

    decisionButton: style({
        color: "rgba(0,0,0,0.5)"
    })
});

const slideOut = keyframes({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to  : { transform: 'translateX(0)',     opacity: 1 },
});

export const exitSlidePage = style({
    animation: `${slideOut} 0.5s ease-in-out`,
});