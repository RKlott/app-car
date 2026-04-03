import React, { Component } from "react";
import "./App.css";
import MyCars from "./components/MyCars";

class App extends Component {
  state = {
    titre: "Mon catalogue de Voitures",
    color: "blue",
  };

  changeTitle = () => {
    this.setState({
      titre: "Mon nouveau titre",
    });
  };

  changeViaParam = (title) => {
    this.setState({
      titre: title,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <MyCars title={this.state.titre} color={this.state.color} />

          <button onClick={this.changeTitle}>Changer le nom en dur</button>
          <button onClick={() => this.changeViaParam("Titre custom")}>
            Changer le nom via paramètre
          </button>
        </div>
      </>
    );
  }
}

export default App;
