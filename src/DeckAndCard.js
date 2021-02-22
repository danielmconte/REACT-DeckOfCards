import React, {useState, useEffect} from 'react';
import axios from 'axios'


const DeckAndCard = () => {
    const [deckId, setDeckId] = useState(null);
    const [card, setCard] = useState("");
    const [count, setCount] = useState(0);

    const handleClick = (evt)=>{
        evt.preventDefault();
        setCount(count => count + 1);
        if(count === 52){
            alert("Error, no more cards in deck");
        }
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => {setCard(res.data.cards[0].image)})
     
    }

    useEffect(()=> {
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(res => {setDeckId(res.data.deck_id)})

    }, [])

 

    return (
        <>
        {count > 52 ? 
        
        <div>
        <h3>No cards left</h3> 
        <button>DECK EXHAUSTED</button>
        </div>
        
        : 
        <div>
            <h3>Push Button</h3>
            <img src= {card}/>
            <div>
                <button onClick={handleClick}>GIMME A CARD</button>
            </div>
        </div>
        }
        </>
    )

}


export default DeckAndCard;