
import React from 'react';
import HornedBeast from './HornedBeast';
import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component{

    getting(){

    
    let newData = JSON.parse(JSON.stringify(this.props.data))
    return newData;
    }

    render(){
        return(
            <div>

                {this.getting().map((item)=>{
                    return (
                       
                        <Row>
                        <HornedBeast 
                        title={item.title}
                        image_url={item.image_url}
                        description={item.description}
                        models={this.props.models}
                        showModal={this.props.stateUpdate}
                        />
                        </Row>
                        
                    )
                })
                    
                    
                
               }
            </div>

        )
    }
}

export default Main;