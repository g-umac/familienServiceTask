import React from "react";
import { Accordion, Button } from "react-bootstrap";
import data from "../dropdownData.json";
import "../Styles/DropdownCom.scss";
 
import { useRef, useState } from "react";
import Popup from "./Popup";
 import { useAccordionButton } from "react-bootstrap/AccordionButton";

const AktivMailAdresse = (props) => {
  const emailEl = useRef(null);
  const [currentEmail, setCurrentEmail] = useState("");
  const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);

  const setEmailOnUI = (email) => {
    setShow(true);
    props.setAlert(true);
    emailEl.current.value = email;
    setCurrentEmail(email);
  };

  return (
    <div>
      <p className="mb-3 ">
        Deine aktuelle E-Mail-Adresse:
        <strong id="aktuel-email" ref={emailEl}>
          {currentEmail.length ? currentEmail : "devet@familienservice.de"}
        </strong>
      </p>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <Button
          className="p-1 btn border-none btn-danger"
          onClick={handleShow}
          style={{ backgroundColor: "#AD325D" }}
        >
          E-MAIL-ADRESSE ÄNDERN
        </Button>
      </div>
      {show ? (
        <div>
          <Popup
            setCurrentEmail={setCurrentEmail}
            currentEmail={currentEmail}
            setEmailOnUI={setEmailOnUI}
            setShow={setShow}
            show={show}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="align-self-center">
        <Popup />
      </div>
    </div>
  );
};

const DropdownCom = () => {
  const [openDropdown, setopenDropdown] = useState(false);
  const [alert, setAlert] = useState(false);
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Accordion
      className=" panel block-example border-bottom border-none"
      defaultActiveKey="0"
    >
      {data.map((item) => {
        return (
          <>
            <Accordion.Item eventKey={item.number}>
              <Accordion.Header>
                <i
                  style={{ color: "#007AAD" }}
                  className={`fas ${item.icon} me-4 arrow`}
                ></i>
                {item.title}
              </Accordion.Header>
              <Accordion.Body>
                <div openDropdown={false}>
                  {item.content} <br />
                  {item.subcontent}
                  <div>
                    {item.subcontent ? <AktivMailAdresse /> : <div></div>}
                  </div>
                </div>
                <div className="d-flex mt-1 custommToggle justify-content-center align-items-center brd border-none ">
                  <CustomToggle eventKey="1" className="bg-light">
                    <i
                      className=" accordion-button collapsed icons d-flex justify-content-center   fas fa-angle-up w-100 text-center fs-5 cursor bg-transparent "
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse ${item.number}`}
                      aria-hidden="false"
                      aria-expanded="false"
                      aria-controls={`flush-collapse${item.number}`}
                    ></i>
                  </CustomToggle>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </>
        );
      })}
    </Accordion>
  );
};

export default DropdownCom;
