import React from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import ContentWrapper from "./layout/content/content.layout";

const App = () => {
  return (
    <div className="App">
      <MenuContainer />
      <ContentWrapper />
    </div>
  );
};

export default App;
