import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BiHelpCircle,
  BiSolidGridAlt,
  BiSolidCalendarCheck,
  BiMessage,
} from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { BsFillHandbagFill } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import "./MainPage.css";




const SideBar = () => {
    return (
      <div>
        <Container>
          <Row>
            <Col className="heading">Medico Sales</Col>
          </Row>
        </Container>
        <Container className='nav'>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link eventKey="link-1">
              <BiSolidGridAlt /> Dashboard
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <BiSolidCalendarCheck /> Lab Test
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <TbCalendarTime /> Appoinment
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <BsFillHandbagFill /> Medicine Order
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <BiMessage /> Message
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <LuWallet /> Payment
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <FiSettings /> Settings
            </Nav.Link>
            <div class="mb-auto p-2">
              <Nav.Link eventKey="link-2">
                <BiHelpCircle /> Help
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </div>
    );
};

export default SideBar;