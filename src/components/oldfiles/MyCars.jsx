import React, { Component } from "react";
import Car from "./Car";
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class MyCars extends Component {
  state = {
    cars: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],
  };

  noCopy = () => {
    alert("merci de ne pas copier le texte");
  };

  addStyle = (e) => {
    e.target.classList.contains("styled")
      ? e.target.classList.remove("styled")
      : e.target.classList.add("styled");
  };

  addTenYears = () => {
    const updatedState = this.state.cars.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedState,
    });
  };

  getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year;

    let frenchYearStr = "";
    if (age === 1) {
      frenchYearStr = "an";
    } else if (age > 1) {
      frenchYearStr = "ans";
    }
    return `${age} ${frenchYearStr}`;
  };

  render() {
    this.state.cars.map(({ name, color, year }, index) => {
      return (
        <div>
          <h1 style={{ color: this.props.color }}>{this.props.title}</h1>
          
          <button>+ 10 ans</button>

          <div key={index}>
            <Car nom={name} color={color}>
              {" "}
              year={year}{" "}
            </Car>
          </div>
        </div>
      );
    });
  }
}
export default MyCars;
