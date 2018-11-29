import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Table } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <AlertDismissable />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
