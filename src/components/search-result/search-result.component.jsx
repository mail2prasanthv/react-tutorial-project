import { Component } from "react";
import Card from '../card/card.component';

import "./card-list.styles.css"

class SearchResult extends Component {

    render() {

        const {myFilteredUsers} = this.props;

        return (
            <div className="card-list">
                {
                    myFilteredUsers?.map((eachUser)=>(
                        <Card id={eachUser.id} name=  {eachUser.name} email={eachUser.email}/>
                                                    )
                                        )
                }
            </div>
        );
    }
}

export default SearchResult;