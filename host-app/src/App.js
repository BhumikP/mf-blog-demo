import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "10px solid green",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <ErrorBoundary>
    <div>
      <h1>This is Host App where we can host multiple remote apps</h1>

      <NavBar />
      <RemoteWrapper>
        <RemoteApp />
      </RemoteWrapper>
      <br />
      <RemoteButton />
    </div>
  </ErrorBoundary>
);
export default App;
