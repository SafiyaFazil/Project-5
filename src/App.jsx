import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import MainPage from './MainPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MainPage.css';


const App = () => {
  return (
    <div  >
      <Container>
      <Row>
        <Col sm={3}><SideBar /></Col>
        <Col sm={9}><MainPage /></Col>
      </Row>
      
    </Container>

          
          
    </div>
  );
};

export default App;