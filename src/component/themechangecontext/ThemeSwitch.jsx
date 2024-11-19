import { useContext } from "react";

import ThemeContext from "./context";


export const ThemeSwitcher=()=>{
const{theme, handleDark, handleLight} = useContext(ThemeContext)





return(
    <div style={{ 
        backgroundColor: theme==='light'?'white':'black',
        color: theme==='light'?'black':'white',
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",}}>
        <h1>{theme==='light'?'White mode':'Dark mode'}</h1>
            <button onClick={handleDark}> Dark Mode</button>
            <button onClick={handleLight}> Light Mode</button>
    </div>
)
}

