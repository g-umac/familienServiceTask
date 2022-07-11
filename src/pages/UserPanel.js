import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/_UserPanel.scss";
import Header from "../assests/images/Header.png";
import DropdownCom from "../component/DropdownCom";

const UserPanel = () => {
 
  return (
    <Container fluid className="m-0 p-0">
      <Col>
        <Row className="align-items-stretch header">  
        <div  className="img-fluid header--images"></div>
         
        </Row>
        <Row>
          <Col className="d-flex justify-content-center col-12">
            <div className="logo  d-flex justify-content-center col-12 ">
              <i className="fas fa-user p-2 logo_image"></i>
            </div>
            <i className="fas fa-pen pencil border border-danger rounded-circle  "></i>
          </Col>
          <Col className="d-flex   justify-content-center">
            <p className="fs-4  m-0 p-0 text-primary mb-0 user-name fw-bold">
              devel oper
            </p>
          </Col>
        </Row>
      </Col>
      {/* //dropdown button */}

      <Row  className="d-flex justify-content-center m-5 p-5" >
         <Col className="col-8 ">
          <DropdownCom />
        </Col> 
      </Row>
    </Container>
  );
};

export default UserPanel;
