import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const {onDecrement ,onReset, onIncrement , onDelete , counters} = this.props;
    return (
      <>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
            key={counter.id}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </>
    );
  }
}

export default counters;
