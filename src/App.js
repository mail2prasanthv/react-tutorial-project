
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

  onSearchChange = (event)=> {
      this.setState({searchKeyword: event.target.value})
    };
  

   render() {

    const filteredUsers = this.state.myusers.filter(eachname=> 
      String(eachname.name).includes(this.state.searchKeyword));

    return (
      <div className="App">
        <input className='searchUsers' type='search' placeholder='Search Me' onChange={this.onSearchChange}>
        </input>
          {
            
            
            filteredUsers.map(eachname=>{
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
