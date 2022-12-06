
import { Component } from 'react';


import './App.css';

class  App extends Component {

  constructor() {
    super();
    this.state ={
      myusers: [],
      searchKeyword: "",
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
        <input className='searchUsers' type='search' placeholder='Search Me' 
        onChange={
            (event)=> {
                        this.setState({searchKeyword: event.target.value})
                      }
                  }
        ></input>
          {
            this.state.myusers && 
            this.state.myusers.filter(eachname=> String(eachname.name).includes(this.state.searchKeyword))
                               .map(eachname=>{
              return <div id={eachname.id} key={eachname.id} >
                          <h1>{eachname.name}</h1>
                      </div>
            })
          }
      </div>
    );
  }
}

export default App;
