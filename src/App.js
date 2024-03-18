import React, { useEffect, useState } from "react";
import ThemeToggle from "./component/themeToggle";
import Content from "./component/content";
import InputBox from "./component/inputBox";
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

        <ThemeToggle />
        <Content />

        {/* <InputBox /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
