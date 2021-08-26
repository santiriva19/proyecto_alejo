import { useState } from 'react';
import './flight.css'
export default function Flight(props) {
    const [priceEdited, setPriceEdited] = useState(props.price);
    const [timesAdded, setTimesAdded] = useState(1);
    const plus = () => {
        let auxCounter = timesAdded;
        if(timesAdded !== 0 )
        {
            auxCounter++;
            setTimesAdded(auxCounter);
            setPriceEdited(props.price * auxCounter);
        }
        
    }
    const minus = () => {
        let auxCounter = timesAdded;
        if(timesAdded > 1 )
        {
            auxCounter--;
            setTimesAdded(auxCounter);
            setPriceEdited(props.price * auxCounter);
        }
    }
    return(
        <div className="flightCard">
            <div className="imageCard">
                <img
                src={props.img} 
                />
            </div>
            <div className="infoCard">
                <h2> {props.title} </h2>
                <p> {props.fromTo} </p>
                <p> {priceEdited}$ </p>
                <div className="buttonGroup">
                    <input 
                    onClick={ () => minus()}
                    type="button" 
                    value="-" 
                    />
                    <input 
                    onClick={ () => plus()}
                    type="button" 
                    value="+" 
                    />
                    {timesAdded}
                </div>
            </div>
           
        </div>
    )
}