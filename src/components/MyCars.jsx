import React, { Component } from "react";
import Car from "./Car";
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class MyCars extends Component {
  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  };

  noCopy = () => {
    alert('merci de ne pas copier le texte');
  }

  addStyle = (e) => {
    e.target.classList.contains('styled') ? e.target.classList.remove('styled') : e.target.classList.add('styled');
  }

  render() {
    return (
      <div>
        <Wrapper>
          <MyHeader customStyle={this.props.color} >{this.props.title}</MyHeader>
          <p onCopy={this.noCopy}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quam autem consectetur, eligendi culpa quae? Vitae ullam similique sunt odit. Ullam distinctio nihil, quae quasi impedit quaerat voluptatem consequuntur sequi.
          Perspiciatis, facere quo. Culpa possimus repellat sed laudantium voluptatum a architecto, eaque cupiditate excepturi beatae alias mollitia magni, autem ullam dicta quas ad. Quam laboriosam omnis ipsa cum suscipit? Optio?
          Placeat, vero rem est accusantium, tenetur eos quae incidunt suscipit sunt modi iure neque odio distinctio totam a, debitis repellendus reprehenderit unde magni sint ad? Voluptas explicabo sunt magni praesentium.</p>
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
