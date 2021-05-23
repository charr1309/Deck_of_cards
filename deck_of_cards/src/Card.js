import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <img clasName='Card'src={this.props.image} alt={this.props.name}/>
        )
    }
}
 export default Card;