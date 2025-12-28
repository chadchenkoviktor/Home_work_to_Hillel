import { createContext } from "react"

export const themes = {
    white: {
        color: "white",
        backgroundColor: "#1d1c1cff"
    },
    orange: {
         color: "orange",
        backgroundColor: "#fff"
    }
}

export const ThemeContext = createContext();