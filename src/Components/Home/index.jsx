import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <h3>The Task</h3>
    <p>
      We have a simple movie application which has a list page and a view page.
      We need to take data from an api and display our movie information. Please
      ask questions and talk through reasoning while solutioning.
      <br />
      <br />
      <h6>Requirements:</h6>
      <ul>
        <li>
          Fetch movie list from json endpoint, store in component state, and
          list items on page.
        </li>
        <li>
          Items on list page should be clickable, and take you to the view page
          with id provided in url.
        </li>
        <li>
          Fetch movie item from json endpoint using id, store in component
          state, and display movie details on view page.
        </li>
      </ul>
      <h6>Bonus Points:</h6>
      <ul>
        <li>Remove any movies with missing or partial data.</li>
        <li>Show movie artwork on list and edit page in a pleasing manner.</li>
        <li>
          Show a message "no cast found" when there are no items in the cast
          array.
        </li>
        <li>
          Create and render a custom component for No Cast Found functionality.
        </li>
      </ul>
    </p>
    <br />
    <NavLink to="movies">Click here to start assessment</NavLink>
  </Fragment>
);
