import { Component } from "react";

class SearchBox extends Component {
    render() {
      return   (<div>
                    <input  
                        className={this.props.className}
                        type='search' 
                        placeholder={this.props.placeholderText}
                        onChange={this.props.onSearchChangeHandlerMethodName}>
                    </input>      
                </div>);
    }
}

export default SearchBox;