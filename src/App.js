import Navbar from "./UI/Navbar";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </Fragment>
  );
}

export default App;
