
import { Component } from 'react';

import SearchResult from './components/search-result/search-result.component';
import SearchBox from './components/search-box/search-box.component';
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

      console.log(filteredUsers);

    return (
      <div className="App">
        <SearchBox onSearchChangeHandlerMethodName={this.onSearchChange} placeholderText="Search Me" className='searchUsers' />
        <SearchResult myFilteredUsers={filteredUsers} />  
         
      </div>
    );
  }
}

export default App;
