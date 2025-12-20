import { Component } from "react";

class ItemResult extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            divResult: 'smail_1',
        };
    }

    changeItem() {
        this.setState({
            divResult: 'smail_2',
        });
    }

    render() {
        return(
            <div onClick={this.changeItem.bind(this)}>
                <img src={`${this.state.divResult}`}></img>
                change Item
            </div>
        );
    }
}

export default ItemResult;