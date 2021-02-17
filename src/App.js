import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Profil from "./component/Profil";
import "./App.css";

export default class App extends Component {
  state = {
    show: false,
    count: 0,
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div className="pos">
          <Button variant="light" onClick={this.handleShow} className="toggle">
            Toggle
          </Button>
          <h2>{this.state.count}</h2>
        </div>

        {this.state.show && <Profil />}
      </div>
    );
  }
}
