import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

class HornedBeast extends React.Component {

constructor(props){
    super(props);
    this.state = {
        counting : 0
    };

  
}

increaseVote = () => {
    this.setState ({
        counting: this.state.counting +1
    });
    
};
    render(){
        return(
            <Card style={{ width: '20rem' }}
            onClick = {this.increaseVote}>

            <Card.Img variant="top" src={this.props.imgurl}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description}
                </Card.Text>
                <Button variant="primary" >Favorite 😍:{this.state.counting} </Button>
            </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;