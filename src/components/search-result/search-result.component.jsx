import { Component } from "react";
import "./card.styles.css";
import "./card-list.styles.css"

class SearchResult extends Component {

    render() {

        const {myFilteredUsers} = this.props;

        return (
            <div className="card-list">
                 {myFilteredUsers?.map((eachUser)=>(
                        <div className="card-container">
                            <h2 id={eachUser.id} key={eachUser.id}>
                                {eachUser.name}
                            </h2>
                            <p>{eachUser.email}</p>
                        </div>
    ))}
            </div>
        );
    }
}

export default SearchResult;