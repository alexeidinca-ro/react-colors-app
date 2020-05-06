import sizes from './sizes';

export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    paletteColors: {
        height: "calc(100% - 100px)",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-start"
    },
    goBack: {
        width: "20%",
        height: "50%",
        position: "relative",
        margin: "0",
        display: "inline-block",
        cursor: "pointer",
        opacity: "1",
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            backgroundColor: "rgba(255,255,255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        },
        [sizes.down("lg")]: {
            height: "25%",
            width: "100%"
        },
        [sizes.down("md")]: {
            height: "20%",
            width: "50%"
        },
        [sizes.down("xs")]: {
            height: "10%",
            width: "100%"
        }
    }
}