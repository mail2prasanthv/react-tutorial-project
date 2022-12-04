
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component {

  constructor() {
    super();
    this.state ={
      names: [
        { id: 1,
          value: 'Prasanth'
        },
        { id: 2,
          value: 'Kevin'
        },
        { id: 3,
          value: 'Manu'
        }
      ]
    }
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.names.map(name=>{
              return <div id={name.id}>
                <h1>{name.value}</h1>
                </div>
            })
          }
        </header>
      </div>
    );
  }
  
}

export default App;
