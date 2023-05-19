import Carousel from 'react-bootstrap/Carousel';


function AppSlider() {
  return (
    <Carousel>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/kotovia.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Альтернативна Котовія</h3>
          <p>СОКОРО БУДЕ</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>КОРИДОР</h3>
          <p>КАРТИНА КОТА.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/cloaker.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            Восьме чудо світу
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppSlider;