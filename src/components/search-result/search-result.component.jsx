import { Component } from "react";

class SearchResult extends Component {

    render() {

        const {myFilteredUsers} = this.props;

        return (
            <div>
                 {myFilteredUsers?.map(eachUser=>(
                          <h1 id={eachUser.id} key={eachUser.id}>{eachUser.name}</h1>
            ))}

            </div>
        );
    }
}

export default SearchResult;