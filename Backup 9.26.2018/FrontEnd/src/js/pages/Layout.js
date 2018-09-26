import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Button from "../components/Button";

export default class Layout extends React.Component {
  
  // selectEmployee(e) {
  //   console.log("from selectEmployee");
  // }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    
    return (
     
        <div>

        {/* // <form className="container-fluid" onSubmit={this.handleFormSubmit}>  */}

        <Nav location={location} />

          <div class="container" style={containerStyle}>
            <div class="row">
              <div class="col-lg-12">

                <h1>Shields Industries</h1>
                
                <h1>{this.props.children}</h1>
                              
              </div>
            </div>

            

            <Footer/>

          </div>
        </ div>

    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

