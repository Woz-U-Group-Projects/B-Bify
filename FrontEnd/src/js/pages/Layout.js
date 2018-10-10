import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    
    return (
     
        <div>        

        <Nav location={location} />

          <div class="container" style={containerStyle}>
            <div class="row">
              <div class="col-lg-12">

                <h1>HR Squared</h1>
                <h3>Thinking inside the box!</h3>
                
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

