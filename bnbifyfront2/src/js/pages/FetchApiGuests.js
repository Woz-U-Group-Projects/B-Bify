import React from "react";

// export default class Settings extends React.Component {
//   render() {
//     console.log("settings");
//     return (
//       <h1>Settings</h1>
//     );
//   }
// }

export default class FetchApiGuests extends React.Component {
  constructor() {
      super();
      this.state = {
          'items': []
      };
  }

  componentDidMount() {
      this.getItems();
      }
  
  getItems() {
                      
          fetch('http://localhost:5000/api/values')           
          .then(results => results.json())
          .then(results => this.setState({'items' : results}));
          console.log('CL Test Point #1');
          console.log(JSON.stringify(this.state.items));
  }                  
  
render() {
  return (
    <div>
      <h1>{JSON.stringify(this.state.items[0])}</h1>
      <p>This is a simple example of a React component.</p>

      {/* <p>Current count: <strong>{this.state.currentCount}</strong></p> */}

      {/* <button onClick={this.incrementCounter}>Increment</button> */}
    </div>
  );
}
}



