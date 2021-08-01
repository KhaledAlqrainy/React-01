
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NewData from './components/data.json';
import SelectedBeast from './components/SelectedBeast'
import { Row } from 'react-bootstrap';

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

      <Row>
        <Header />

      </Row>

      <Row>
      <Main
      data={NewData}
      models={this.models}
      stateUpdate={this.showing}
      />
      </Row>

      <Row>

      <SelectedBeast 

        show={this.state.show}
        hide={this.hiden}
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
      />
      </Row>

      <Row>

      <Footer />

      </Row>
      </>
    )
  }
}

export default App;
