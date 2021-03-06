import { createMuiTheme } from "@material-ui/core/styles";


const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
    Palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
        typography: {
            tab: {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: "700",
                color: "white",
                fontSize: "1rem"
            },
            estimate: {
                fontFamily: "Pacifico",
                fontSize: "1rem",
                textTransform: "none",
                color: "white"
            }
        }
    }
})