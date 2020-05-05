//////ALEXD - SIZE HELPERS INFO
////Device sizes below updated from Bootstrap

// extra small devices - @media (max-width: 575.98px){...} - xs

// small devices - @media (max-width: 767.98px){...} - sm

// medium devices - @media (max-width: 991.98px){...} - md

// large devices - @media (max-width: 1199.98px){...} - lg

// extra large - 1199.98 and UP - xl

////size helpers functions:
// down() - from the resolution specified - all the way down - @media max-width(...){...code}
// up() - from the resolution specified - all the way up - @media min-width(...){...code}

export default {
    up(size){
        const sizes = {
            xs: "575.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px"
        }

        return `@media (min-width: ${sizes[size]})`
    },
    down(size){
        const sizes = {
            xs: "575.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px"
        }

        return `@media (max-width: ${sizes[size]})`
    }
}

// For a class (selector in JSS), media queries can be added like this: 

// styledBox: {
//     width: "20%",
//     height: "25%",
//     position: "relative",
//     margin: "0 auto",
//     display: "inline-block",
//     cursor: "pointer",
//     marginTop: "-4px",
//     "&:hover button": {
//         opacity: 1
//     },
//     [sizes.down("md")]: {
//         width: "50%"
//     }
// }