import { useContext,createContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
    // idhar default values de rhe    values + methods
})

export const ThemeContextProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
// iise ab har jagah pichkli baar jaise  use context aur UserContext ko nahikrna hoga import just imp fn useTheme it has context 

// ab kabhi bhi un teen(context ke values ,modules) me se koi ki zaruat h to useTheme use kro


