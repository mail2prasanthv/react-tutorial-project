import { Component } from "react";
import "./card.styles.css"

class Card extends Component {

    render() {

        const {id} = this.props;
        const {name} = this.props;
        const {email} = this.props;        

        return ( 
                        <div className="card-container">
                            <h2 id={id} key={id}>
                            {email}
                            </h2>
                            <p>{name}</p>
                        </div>
    );
           
    }
}

export default Card;