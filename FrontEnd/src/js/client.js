import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import FetchApiBookings from "./pages/FetchApiBookings";
import FetchApiEmployees from "./pages/FetchApiEmployees";
import FetchApiReviews from "./pages/FetchApiReviews";
import Employees from "./pages/Employees";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Employees}></IndexRoute>
      <Route path="fetchapiemployees" name="fetchapiemployees" component={FetchApiEmployees}></Route>
      <Route path="reviews" name="reviews" component={FetchApiReviews}></Route>
      <Route path="bookings" name="bookings" component={FetchApiBookings}></Route>
      <Route path="employees" name="employees" component={Employees}></Route>
    </Route>
  </Router>,
app); 
