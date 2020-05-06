import chroma from 'chroma-js';
import sizes from './sizes'

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.2)"
        },
        [sizes.down("lg")]:{
            width: "33.33%",
            height: "14%"
        },
        [sizes.down("md")]:{
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]:{
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        color: props => chroma(props.color).luminance() <=0.08 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
        left: "0",
        bottom: "0",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;