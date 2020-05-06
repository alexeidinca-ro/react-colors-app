import bg from './bg.svg';
import sizes from './sizes';

export default {
    "@global":{
        ".fade-exit": {
            opacity: "1"
        },
        ".fade-exit-active":{
            opacity: "0",
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        backgroundColor: "#9423a8",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "auto",
        paddingBottom: "50px",
        /* background by SVGBackgrounds.com */
        background: `url(${bg}) no-repeat center`,
        backgroundSize: "cover"
    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("md")]:{
            width: "90%"
        },
        [sizes.down("xs")]:{
            width: "90%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        padding: "10px 0px",
        "& a":{
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "25px",
        [sizes.down("lg")]:{
            gridTemplateColumns: "repeat(2,48%)",
            gridGap: "25px"
        },
        [sizes.down("xs")]:{
            gridTemplateColumns: "repeat(1,100%)",
            gridGap: "15px"
        }
    }
}