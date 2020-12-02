import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    // count: this.props.value,
    // value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // Bind handle function with this or use handle function as error function
  //   constructor() {
  //     super();
  //     console.log("constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = (product) => {
  //     console.log(product);
  //     // this.state.count++;
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("props", this.props);

    return (
      <div>
        {/* Counter #{this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          //   onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

// export default Counter;
