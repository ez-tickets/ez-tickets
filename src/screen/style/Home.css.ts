import { keyframes, style} from "@vanilla-extract/css";

export const home = ({
    parent: style({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    }),

    footer: style({
        backgroundColor: "aqua",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "1"
    }),
});

const slideOut = keyframes({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to  : { transform: 'translateX(0)',     opacity: 1 },
});

export const exitSlidePage = style({
    animation: `${slideOut} 0.5s ease-in-out`,
});