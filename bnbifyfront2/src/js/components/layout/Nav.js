import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const FetchApiGuestsClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const featuredClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={FetchApiGuestsClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Guests</IndexLink>
              </li>
              <li class={archivesClass}>
                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
              </li>
              <li class={featuredClass}>
                <Link to="featured" onClick={this.toggleCollapse.bind(this)}>Featured</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
