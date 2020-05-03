import chroma from 'chroma-js';

export default {
    colorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        position: "relative",
        margin: "0 auto",
        display: "inline-block",
        cursor: "pointer",
        marginTop: "-4px",
        "&:hover button": {
            opacity: 1
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <=0.08 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        backgroundColor: "rgba(255,255,255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
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
        opacity: "0"
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0",
        bottom: "0",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        height: "100%",
        display: "flex",
        alignItems: "flex-end"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)",
        position: "absolute"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
    },
    copyMessage: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        transform: "scale(0.1)",
        opacity: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        fontSize: "2rem",
        "& h1": {
            textTransform: "uppercase",
            textShadow: "1px 2px #000",
            background: "rgba(255,255,255,0.3)",
            width: "100%",
            textAlign: "center",
            padding: "10px",
            margin: "0px"
        },
        "& p":{
            fontSize: "1rem",
            fontWeight: "100"
        }
    },
    showMessage: {
        transform: "scale(1)",
        opacity: "1",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: ".3s"
    }
}