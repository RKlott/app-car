import React, { Component } from "react";
import Car from "./Car";
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class MyCars extends Component {
  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  };

  render() {
    return (
      <div>
        <Wrapper>
          <MyHeader customStyle={this.props.color}>{this.props.title}</MyHeader>
        </Wrapper>

        <h1>Hello React</h1>
        <Car color="red"> {this.state.cars[0]} </Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="green">{this.state.cars[2]}</Car>
      

      <MyHeader
      customStyle= {this.props.color} >
        Bonjour
      </MyHeader>
      </div>
    );
  }
}
export default MyCars;
