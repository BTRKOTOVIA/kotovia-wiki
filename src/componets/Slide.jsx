import Carousel from 'react-bootstrap/Carousel';
import Item from 'react-bootstrap/Carousel'
import Caption from 'react-bootstrap/Carousel'

const Slide = ()=> {
    return <Item>
                <img
                    className="d-block w-100"
                    src="../img/kotovia.png"
                    alt="First slide"
                />
                <Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Caption>
            </Item>
}

export default Slide