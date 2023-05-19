import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './componets/CardItem'
import CardModal from './componets/CardModal';

import db from './settings/db.json'





import './css/App.css';

import AppSlider from './componets/AppSlider';

function App() {
  const cardsData = JSON.parse(JSON.stringify(db))
  console.log(cardsData)

  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow, 'modalShow')
  return (
    <div className="App">
      <h1>Восьме чудо світу</h1>
      <div className='slider-box'>
      <AppSlider/>
      </div>
      <div className='cards-block'>
        {cardsData.map((card, index)=>{
          return ( <div key={index}>
                    <CardItem {...card} setModalShow={setModalShow}  show={modalShow} />
                    </div>)
        })}
       
      
      </div>
    </div>
  );
}

export default App;
