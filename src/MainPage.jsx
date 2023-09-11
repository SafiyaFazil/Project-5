import React from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./MainPage.css";
import { BsBell } from "react-icons/bs";


const MainPage = () => {
  return (
    <div className="mainPage">
      <Container className="searchBar">
        <div class="d-flex justify-content-between ">
          <div class="p-2 flex-grow-1">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div class=" p-2 flex-grow-1"> </div>
          <div class="p-2 bell">
            <BsBell />
          </div>
        </div>
      </Container>
      <Container >
        <Row>
          <Col className="sales">Sales Information</Col>
        </Row>
        <Row>
          <Col className="salesInfo">
            Customer
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter Customer Name"
              />
            </InputGroup>
          </Col>
          <Col className="salesInfo">
            Invoice ID
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter Invoice ID"
              />
            </InputGroup>
          </Col>
          <Col className="salesInfo">
            Start Date
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Start Date"
              />
            </InputGroup>
          </Col>
          <Col className="salesInfo">
            End Date
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="End Date"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th>
                <label class="form-check-label" for="InvoiceID">
                  Invoice ID
                </label>
              </th>
              <th scope="col">Date</th>
              <th scope="col">Customer</th>
              <th scope="col">Payment Amount</th>
              <th scope="col">Paid Amount</th>
              <th scope="col">Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>
                <label class="form-check-label" for="InvoiceID">
                  AHGA68
                </label>
              </td>
              <td>23/09/2022</td>
              <td>Jacob Marcus</td>
              <td>$100</td>
              <td>$000</td>
              <td>$000</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default MainPage;
