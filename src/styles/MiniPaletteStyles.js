import sizes from './sizes';

export default {
    root: {
        backgroundColor: "white",
        position: "relative",
        borderRadius: "5px",
        padding: "0.5rem",
        overflow: "hidden",
        cursor: "pointer",
        width: "calc(33.33% - 30px)",
        margin: "0px 15px 15px",
        "&:hover svg": {
            opacity: "1"
        },
        [sizes.down("sm")]:{
            width: "calc(50% - 30px)"
        },
        [sizes.down("xs")]:{
            width: "100%",
            margin: "0px 0px 15px"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "#000",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"    
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    deleteIcon: {
        position: "absolute",
        top: 0,
        right: 0,
        padding: "10px",
        backgroundColor: "red",
        zIndex: 5,
        opacity: "0",
        color: "white",
        width: "40px",
        height: "40px"
    }
}