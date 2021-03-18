import React from "react";
import { render } from "react-dom";

function App() {
  return (
    <div>
      <h1>pula pula pizda</h1>
      <Triangle />
      <br />
      <br />
      <Square />
      <br />
      <br />
      <Circle />
    </div>
  );
}
class Geom extends React.Component {
  GetArea() {}
  GetColor() {
    return this.color;
  }
  render() {
    return <button color={this.color}>{this.GetArea()}</button>;
  }
}

class Triangle extends Geom {
  GetArea() {
    return "arie triunghi";
  }
  constructor() {
    super();
    this.color = "red";
  }
}

class Square extends Geom {
  GetArea() {
    return "arie patrat";
  }
  constructor() {
    super();
    this.color = "blue";
  }
}
class Element extends React.Component {
  render() {
    if (this.props.arie % 2 == 0) {
      return <h2>{this.props.arie}</h2>;
    } else {
      return <h4>{this.props.arie}</h4>;
    }
  }
}
class Circle extends Geom {
  constructor() {
    super();
    this.elem = [1, 2, 3, 4];
  }
  render() {
    return (
      <div>
        {this.elem.map((elem) => (
          <Element arie={elem}></Element>
        ))}
      </div>
    );
  }
}

export default App;
