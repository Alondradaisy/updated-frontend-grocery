import React, { Component } from "React";
import Header from "./components/Header/header";
import Grocery from "./components/Grocery/Grocery";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grocery />
      </div>
    );
  }
}
export default App;
