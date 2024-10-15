import { style, keyframes } from "@vanilla-extract/css";

export const topNavStyle = ({
    screen: style({
        display: "flex",
        flexDirection: "column",
        height: "100svh",
    }),
})

const rightIn = keyframes({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to  : { transform: 'translateX(0)',    opacity: 1 },
});

const leftIn = keyframes({
    from: { transform: 'translateX(-100%)',    opacity: 0 },
    to  : { transform: 'translateX(0)', opacity: 1 },
});

export const slideRightPage = style({
    animation: `${rightIn} 0.5s ease-in-out`,
    position: 'absolute',
    width: '100%',
    animationDuration: "0.4s",
});

export const slideLeftPage = style({
    animation: `${leftIn} 0.5s ease-in-out`,
    position: 'absolute',
    width: '100%',
    animationDuration: "0.4s",
});