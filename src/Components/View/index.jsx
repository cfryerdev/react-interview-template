import React from "react";
import { NavLink } from "react-router-dom";

export default class View extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getUrl = id => `https://www.mocky.io/v2/${id}`;

  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/movies">&lt;&lt; Back</NavLink>
        <br />
        <br />
        <h5>Movie Title</h5>
        <span>Id:</span> {this.props.match.params.id}
      </div>
    );
  }
}
