import React, { Component } from "react";
import Photo from "../assets/photo.jpg";
import "./Profil.css";

export default class Profil extends Component {
  state = {
    fullName: "Mahdi Dimassi",
    bio: "Née le 12/02/1997",
    profession: "Technico Commercial à Hygiène et Prévention",
    image: Photo,
  };
  render() {
    return (
      <div className="positions">
        <h2>{this.state.fullName}</h2>
        <h2>{this.state.bio}</h2>
        <h2>{this.state.profession}</h2>

        <img src={this.state.image} alt="Photo de Profil" width="20%" />
      </div>
    );
  }
}
