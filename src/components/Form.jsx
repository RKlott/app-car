import React, { Component } from "react";
import Car from "./Car";

class Form extends Component {

    state = {
        username: "",
        color: "",
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: ""
    }

    handlePseudo = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    handleComments = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color}`);
        
    }


    render(){
        return(
            <div>
                <Car color={this.state.color} height="200"/>
                <h1>Commentaire</h1>
                <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label >Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>

                    <div>
                        <label htmlFor="">Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                           { this.state.colors.map((color, index) => {
                            return <option key={index} value={color}> {color} </option>
                            })
                            }
                        </select>
                    </div>

                        <button type="submit">Soumission du formulaire</button>
                </form>
            </div>
        );
    }
}
export default Form;