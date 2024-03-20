import React, { useEffect, useState } from "react";
import ThemeToggle from "./component/themeToggle";
import Content from "./component/content";
import InputBox from "./component/inputBox";
import UseReducer from "./component/useReducer";
import MyForm from "./component/customHookForm";
import Resize from "./component/resize";
import FormReducer from "./component/formReducer";
import "./App.css";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [isToggle, setIsToggle] = useState(false);

  const values = {
    theme,
    setTheme,
    isToggle,
    setIsToggle,
  };

  return (
    <ThemeContext.Provider value={values}>
      <div className="App">
        {/* <CustomForm /> */}

        {/* <ThemeToggle />
        <Content /> */}

        {/* <InputBox /> */}
        {/* <UseReducer /> */}
        {/* <Resize /> */}
        <MyForm />
        {/* <FormReducer /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
