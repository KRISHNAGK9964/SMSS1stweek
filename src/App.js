import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componens/navbar";
import Counters from "./componens/counters";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDecrement = (counterId) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === counterId) {
        c.value--;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counterId) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === counterId) {
        c.value++;
      }
      return c;
    });
    console.log("handleIncrement");
    this.setState({ counters });
  };
  render() {
    return (
      <>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length }/>
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}
