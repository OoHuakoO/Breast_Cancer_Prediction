import React, { useState } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,Button } from 'react-bootstrap';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return <div>

  <div className="container-home">
    <div className="topic1-home">Breast Cancer Test</div>
    <div className="personal">
      <div className="topic2-home">Personal information</div>

      <div className="row">
        <div className="column">
          <label for="fname" className="text1-home">Name</label><br/>
          <input className="input-home" type="text" name="name" required/>
        </div>
        <div className="column">
          <label className="text1-home">Surname</label><br/>
          <input className="input-home" type="text" name="lname" required/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label className="text1-home">Sex</label><br/>
          <input type="radio" id="male" name="gender" value="male" className="radio-home"/>
          <label for="male" className="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" className="radio-home"/>
          <label for="female">Female</label>
        </div>
        <div className="column">
          <label className="text1-home">Age</label><br/>
          <input className="input-home" type="text" name="age" required/>
        </div>
      </div>
    </div>

    <div className="detail">
      <div className="topic3-home">Details about the breast x-ray film</div>

      <div className="row">
        <div className="column">
          <label for="thickness" className="text1-home">Thickness</label>
          <input className="input-home" type="text" name="thickness" required/>
        </div>
        <div className="column">
          <label for="cellsize" className="text1-home">Cell size</label>
          <input className="input-home" type="text" name="cellsize" required/>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label for="cellshape" className="text1-home">Cell shape</label>
          <input className="input-home" type="text" name="cellshape" required/>
        </div>
        <div className="column">
          <label for="adhesion" className="text1-home">Adhesion</label>
          <input className="input-home" type="text" name="adhesion" required/>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label for="epithelialsize" className="text1-home">Epithelial size</label>
          <input className="input-home" type="text" name="epithelialsize" required/>
        </div>
        <div className="column">
          <label for="bareniclei" className="text1-home">Bare niclei</label>
          <input className="input-home" type="text" name="bareniclei" required/>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label for="blandcromatin" className="text1-home">Bland cromatin</label>
          <input className="input-home" type="text" name="blandcromatin" required/>
        </div>
        <div className="column">
          <label for="normalnucleoli" className="text1-home">Normal nucleoli</label>
          <input className="input-home" type="text" name="normalnucleoli" required/>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label for="mitoses" className="text1-home">Mitoses</label>
          <input className="input-home" type="text" name="mitoses" required/>
        </div>
        <div className="column">
          <label for="classlabel" className="text1-home">Machine learning</label>
          <select name="ml" className="input-home" required>
            <option value="0">Naivebayes</option>
            <option value="1">Quadratic Discriminant Analysis</option>
            <option value="2">Random Forest</option>
          </select>
        </div>
      </div>

    </div>

    {/* modal */}
    <div className="button-home">
    <Button className="result" onClick={handleShow}>Results</Button>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"centered className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    </div>

    <div className="button-home">
      <input className="history-home" type="button" value="HISTORY"></input>
    </div>
         
  

  </div>
};

export default Home;
