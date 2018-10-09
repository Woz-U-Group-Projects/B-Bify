// import React from "react";
// import { IndexLink, Link } from "react-router";

// export default class Nav extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       collapsed: true,
//     };
//   }

//   toggleCollapse() {
//     const collapsed = !this.state.collapsed;
//     this.setState({collapsed});
//   }

//   render() {
//     const { location } = this.props;
//     const { collapsed } = this.state;
//     const FetchApiGuestsClass = location.pathname === "/" ? "active" : "";
//     const FetchApiReviewsClass = location.pathname.match(/^\/reviews/) ? "active" : "";
//     const FetchApiBookingsClass = location.pathname.match(/^\/bookings/) ? "active" : "";
//     const navClass = collapsed ? "collapse" : "";

//     return (
//       <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
//         <div class="container">
//           <div class="navbar-header">
//             <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
//               <span class="sr-only">Toggle navigation</span>
//               <span class="icon-bar"></span>
//               <span class="icon-bar"></span>
//               <span class="icon-bar"></span>
//             </button>
//           </div>
//           <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
//             <ul class="nav navbar-nav">
//               <li class={FetchApiGuestsClass}>
//                 <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Employees</IndexLink>
//               </li>
//               <li class={FetchApiReviewsClass}>
//                 <Link to="reviews" onClick={this.toggleCollapse.bind(this)}>Reviews</Link>
//               </li>
//               <li class={FetchApiBookingsClass}>
//                 <Link to="bookings" onClick={this.toggleCollapse.bind(this)}>Bookings</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
