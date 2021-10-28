import React from "react";

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <p className="tacenter">{this.state.count}</p>
        <div className="df jcspace">
          <button className="btn btn-primary" onClick={this.increment}>
            increment(class)
          </button>
          <button className="btn btn-warning" onClick={this.decrement}>
            decrement(class)
          </button>
        </div>
      </>
    );
  }
}
