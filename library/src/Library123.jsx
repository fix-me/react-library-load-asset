import React from 'react';
//import testFile from "./testFile.yaml";


export class Library123 extends React.Component {
  constructor() {
    super();
    
    window.console.log("lib...v2:");
    window.console.log("proc", process);
    
    window.console.log("here comes the dynamic file content:");
    
    let testFile = require("./assets/testFile.yaml");
    fetch(testFile).then(data => window.console.log(data));
    
  }
  
  render() {
    return (<div><h2>Hello Library123</h2></div>);
  }
}

export default Library123;