import React from 'react'
import './App.css';
import Flight from './components/flight/flight';
import Img1 from './images/img1.jpg'
import Img2 from './images/img2.jpg'
import Img3 from './images/img3.png'
import Img4 from './images/img4.jpg'
import Img5 from './images/img5.jpg'
function App() {
  const dataFlights = [
      {
          "id": 0,
          "title": "Miami",
          "fromTo": "Bogota DC - Miami",
          "price": 3000,
          "img": Img1
      },
      {
          "id": 1,
          "title": "Cancun",
          "fromTo": "Bogota DC - Cancun",
          "price": 200,
          "img": Img2
      },
      {
          "id": 2,
          "title": "Cali",
          "fromTo": "Bogota DC - Cali",
          "price": 400,
          "img": Img3
      },
      {
          "id": 3,
          "title": "Cartagena",
          "fromTo": "Bogota DC - Cartagena",
          "price": 160,
          "img": Img4
      },
      {
          "id": 4,
          "title": "Paris",
          "fromTo": "Bogota DC - Paris",
          "price": 3900,
          "img": Img5
      },
  ]
  return (
    <div className="bodyHome">
      <div className="head">
        <h1> The best way to buy your flights </h1>
      </div>
      <div className="contFlights">
        <div className="rowFlight">
          {
            dataFlights.map((flight) => 
              <Flight 
              index={flight.index}
              title={flight.title} 
              price={flight.price}  
              fromTo={flight.fromTo}
              img={flight.img}
              />
            )
          }
        </div>
       
      </div>
    </div>
  );
}

export default App;
