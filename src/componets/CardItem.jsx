import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardModal from './CardModal';

const CardItem = (props)=>{
    const [modalShow, setModalShow] = React.useState(false);
    const  { title, text, imgUrl} = props

    const shoeHandler = ()=> {
        setModalShow(true)
        console.log("sdfsd")
    }

   
    return (
        <>
         <CardModal {...props} show={modalShow} onHide={() => setModalShow(false)}/>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{title}.</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Button variant="primary" onClick={shoeHandler}>Go somewhere</Button>
          </Card.Body>
        </Card>
        </>
      );
}

export default CardItem


