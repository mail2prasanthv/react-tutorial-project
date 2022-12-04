
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component {

  constructor() {
    super();
    this.state ={
      names: [
        {value: 'Prasanth'},
        {value: 'Kevin'},
        {value: 'Manu'}
      ]

    
    }
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.names.map(name=>{
              return <h1>{name.value}</h1>
            })
          }
        
        </header>
      </div>
    );
  }
  
}

export default App;
