import { style } from "@vanilla-extract/css";

export const menuDescriptionStyle = ({
    main: style({
        flex: "1",
        marginBottom: "100px",
        overflowY: "scroll",
        padding: " 0 10px",
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

    toppingButton: style({
        fontSize: "1.5rem",
        fontWeight: "bold",
        display: "flex",
        margin: "50px auto",
        color: "#f5f5f5",
        padding: "0.2em 1.5em",
        borderRadius: "0.5em",
        background: "paleturquoise",
        border: "1px solid #e8e8e8",
        transition: "all 0.3s",
        boxShadow: "3px 3px 6px #c5c5c5, -3px -3px 6px",
    })
})