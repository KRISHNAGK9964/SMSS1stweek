import React, { Component } from "react";
class Counter extends Component {
  

  render() {
    return (
      <div>
        {this.props.value > 0 && (
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.id)}
          >
            Decrement
          </button>
        )}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={()=>this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    const {value} = this.props;
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }
  
}

export default Counter;
