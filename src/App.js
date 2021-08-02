import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import DataArr from './components/data.json';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col , Form} from 'react-bootstrap';
import SelectedBeast from './components/SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      description: '',
      show: false,
      filteredData:DataArr,
    };
  }

  modalSelected = (title,image_url,description) => {
    this.setState({
      title:title,
      image_url: image_url,
      description: description,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleHide = () => {
    this.setState({
      show: false,
    });
  };
  getNumOfHorns=(event)=>{
let horns =event.target.value;
let filterData = DataArr.filter((item) => {

  if (item.horns == horns)
  {
    return true;
  }
  if(horns =='all'){
    return true;
  }
  
})
this.setState({
  filteredData:filterData,
  })

  }
  render() {
    return (
      <>
        <Container >
          <Row>
            <Col>
              <Header />
              <Form.Label > How many horns ? </Form.Label> 

              <Form.Select aria-label="Default select example" onChange={this.getNumOfHorns}>
  <option value='All'> All </option>
  <option value="1"> One </option>
  <option value="2"> Two </option>
  <option value="3"> Three </option>
  <option value="100"> OMG ! </option>

</Form.Select>
            </Col>
          </Row>

          <Row >
            <Main
              data={this.state.filteredData}
              modalSelected={this.modalSelected}
              stateUpdate={this.handleShow}
            />
          </Row>
          <Row>
            <Col>
              <SelectedBeast
                show={this.state.show}
                hide={this.handleHide}
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