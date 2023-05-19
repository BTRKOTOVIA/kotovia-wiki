import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const CardModal = (props)=>{
    const {imgUrl, title, text} = props;
    console.log(imgUrl)
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Created by Revolution-Cat</h4>
            <img className='card-img' src={imgUrl} />
            <p>
               {text}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default CardModal