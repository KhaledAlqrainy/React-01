
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NewData from './components/data.json';
import SelectedBeast from './components/SelectedBeast'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends React.Component{
    constructor (props){
      super(props);
      this.state ={
        show: false,
        title:'',
        image_url:'',
        description:'',
        
      };
    }

    models = (title,image_url,description) => {
      this.setState ({
        title:title,
        image_url:image_url,
        description:description,
      });
    }

    showing = () => {
      this.setState({
        show: true,
      });
    };


    hiden = () => {
      this.setState({
        show: false,
      });
    };


  render(){
    return(
      <>
    <Container >
      <Row>
        <Col>
        <Header />
        </Col>
      </Row>

      <Row>
      <Main
      data={NewData}
      models={this.models}
      stateUpdate={this.showing}
      />
      </Row>

      <Row>
      <Col>
      <SelectedBeast 

        show={this.state.show}
        hide={this.hiden}
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
      />
      </Col>
      </Row>

      <Row>
      <Col>
      <Footer />
      </Col>
      </Row>

      </Container>
      </>
    )
  }
}

export default App;
