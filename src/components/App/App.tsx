import React from "react";
import "./App.css";
import MenuContainer from "./MenuContainer/MenuContainer";
import ContentWrapper from "./ContentWrapper/ContentWrapper";

const App = () => {
  return (
    <div className="App">
      <MenuContainer />
      <ContentWrapper />
    </div>
  );
};

export default App;
