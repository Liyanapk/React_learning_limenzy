
// import './App.css';
// import { MyButton } from './component/MyButton'
// import { ListItems } from './component/MyButton'


// import { ThemeProvider } from './component/themechangecontext/context';
// import { ThemeSwitcher } from './component/themechangecontext/ThemeSwitch';


// import { InputField } from "./component/reference/UseRef";

import { ParentComponent } from "./component/forwardref/ForwarParent"
import { Reducer } from "./component/reducer/Reducer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* < MyButton /> */}
      {/* < ListItems/> */}



        {/* dark mode
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider> */}


        {/* <InputField /> */}

        {/* <ParentComponent /> */}


        <Reducer />

      </header>
    </div>
  );
}

export default App;
