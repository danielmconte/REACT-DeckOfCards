import React, {useState, useEffect} from 'react';
import axios from 'axios';

// This SetInterval does not stop


const Card = ({deckId, handleSent, passed, arr}) => {
    const [card, setCard] = useState("");
    const [count, setCount] = useState(0)

   const counter = () => {
    arr.push('1')
    console.log(arr)
   }

    useEffect(()=> {
        async function helper () {
        const intervalID = setInterval(() => {
        const res = axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(res => {setCard(res.data.cards[0].image)})
            counter()
            if(arr.length >= 53){
                return () => {
                    clearInterval(intervalID);}
            }
        }, 1000)  
        }
        if(passed > 0 && arr.length < 53){
        helper()
        } else{
          console.log(passed)
        }
    }, [passed])

    return (
        <>
        {arr.length > 51 ? 
        
        <div>
        <h3>No cards left</h3> 
        <button>DECK EXHAUSTED</button>
        </div>
        :
        <div>
        <img src= {card}/>
        <div>
            <button onClick={handleSent}>GIMME A CARD</button>
        </div>
        </div>
        }
        </>
    )
}

export default Card;