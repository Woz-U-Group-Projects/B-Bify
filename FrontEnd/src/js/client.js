import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import FetchApiBookings from "./pages/FetchApiBookings";
import FetchApiGuests from "./pages/FetchApiGuests";
import FetchApiReviews from "./pages/FetchApiReviews";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={FetchApiGuests}></IndexRoute>
      <Route path="reviews" name="reviews" component={FetchApiReviews}></Route>
      <Route path="bookings" name="bookings" component={FetchApiBookings}></Route>
    </Route>
  </Router>,
app);
