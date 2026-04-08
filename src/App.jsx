import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Maman from "./components/Maman";
// import MyCars from "./components/MyCars";

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

  changeViaBind = (param) => {
    this.setState({
      titre: param
    });
  };


  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <Form />
          {/* <MyCars title={this.state.titre} color={this.state.color} />

          <button onClick={this.changeTitle}>Changer le nom en dur</button>
          <button onClick={() => this.changeViaParam("Titre custom")}>
            Changer le nom via paramètre
          </button>
          <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Via Bind</button>
          <input type="text" onChange={this.changeViaInput} value={this.state.titre} /> */}
        </div>
      </>
    );
  }
}

export default App;
