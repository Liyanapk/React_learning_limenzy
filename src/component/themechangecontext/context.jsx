
import { createContext, useState } from "react";



const ThemeContext = createContext()


//provider

export const ThemeProvider=({children})=>{

    const [ theme,setTheme ] = useState('light')

    function handleDark(){

        setTheme('dark')
    }

    function handleLight(){
        setTheme('light')
    }

    return(
     
        <ThemeContext.Provider value={{theme, handleDark, handleLight}}>
        {children}
        </ThemeContext.Provider>
    )
  
}



export default ThemeContext


