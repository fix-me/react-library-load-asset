import React from 'React';
import testFile from "./testFile.yaml";


export class Library123 extends React.Component {
  constructor() {
    super();
    
    window.console.log("here comes the dynamic file content:");
    window.console.log("url:", testFile);
    
    fetch(testFile).then((data) => window.console.log(data));
    
  }
  
  render() {
    return (<div><h2>Hello Library123</h2></div>);
  }
}

export default Library123;