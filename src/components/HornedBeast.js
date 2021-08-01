import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class HornedBeast extends React.Component {

constructor(props){
    super(props);
    this.state = {
        counting : 0
    };

  
}

increaseVote = () => {
    this.setState ({
        counting: this.state.counting +1,
    });

            this.props.showModal();
            this.props.models(
            this.props.title,
            this.props.image_url,
            this.props.description,
            );
    
};
    render(){
        return(
        
        <Card style={{ width: '22rem' }} onClick={this.increaseVote} >

        <Card.Img variant="top" src={this.props.image_url} />

        <Card.Body>
            <Card.Text >{this.props.title}</Card.Text>
            <Card.Text >{this.props.description}</Card.Text>
        </Card.Body>
        <Button> Vote for me ❣️ :{this.state.counting} </Button>
    </Card>
        )
    }
}

export default HornedBeast;