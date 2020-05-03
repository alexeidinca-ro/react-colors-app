export default {
    Navbar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        marginBottom: "4px"
    },
    logo:{
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "20px",
        background: "#eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        }
    },
    slider:{
        width: "340px",
        margin: "0px 10px",
        display: "inline-block",
        "& .rc-slider-rail":{
            height: "10px"
        },
        "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:hover,.rc-slider-handle:focus": {
            backgroundColor: "purple",
            border: "2px solid purple",
            boxShadow: "none",
            outline: "none",
            width: "18px",
            height: "18px",
            marginTop: "-4px",
            marginLeft: "-5px"
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider":{
            height: "10px",
            padding: "0px"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "20px"
    }
}