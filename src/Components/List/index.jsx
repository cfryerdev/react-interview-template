import React from "react";
import { NavLink } from "react-router-dom";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getListUrl = _ => "https://www.mocky.io/v2/5e8f8d7c330000231627d22e";

  componentDidMount() {}

  render() {
    return (
      <div>
        <h5>Movies</h5>
        <div class="list-group">
          <NavLink
            to="/movies/12345"
            class="list-group-item list-group-item-action"
          >
            Some Item
          </NavLink>
        </div>
      </div>
    );
  }
}
