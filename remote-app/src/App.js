import React from "react";
import MainContent from "./components/MainContent";
import "./App.css";

export const App = () => {
  return (
    <div className="center">
      <div>
        <h3>Hello from the remote app</h3>
        <MainContent />
      </div>
    </div>
  );
};
export default App;
