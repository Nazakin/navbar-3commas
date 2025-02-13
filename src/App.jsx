import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
