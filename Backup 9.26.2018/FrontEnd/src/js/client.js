import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import FetchApiBookings from "./pages/FetchApiBookings";
import FetchApiEmployees from "./pages/FetchApiEmployees";
import FetchApiReviews from "./pages/FetchApiReviews";
import Employee from "./pages/Employee";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Employee}></IndexRoute>
      <Route path="employees" name="employees" component={FetchApiEmployees}></Route>
      <Route path="reviews" name="reviews" component={FetchApiReviews}></Route>
      <Route path="bookings" name="bookings" component={FetchApiBookings}></Route>
      <Route path="employee" name="employee" component={Employee}></Route>
    </Route>
  </Router>,
app); 
