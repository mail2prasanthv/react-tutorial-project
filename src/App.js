
import { Component } from 'react';


import './App.css';

class  App extends Component {

  constructor() {
    super();
    this.state ={
      myusers: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> this.setState(() => {
      return {myusers: users};
    },));
  }

   render() {
    return (
      <div className="App">
          {
            this.state.myusers.map(eachname=>{
              return <div id={eachname.id}>
                <h1>{eachname.name}</h1>
                </div>
            })
          }
      </div>
    );
  }
  
}

export default App;
