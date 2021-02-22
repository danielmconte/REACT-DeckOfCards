import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Deck = () => {
    const [deckId, setDeckId] = useState(null);
    const [passed, setPassed] = useState(0)
  
    const arr = [];
 

    const handleSent = (evt)=>{
        evt.preventDefault();
        if(passed === 0 && arr.length < 53){
            setPassed(passed => passed + 1);
            console.log(passed);
        }else if(arr.length > 52) {
            return passed;
        } else {
            setPassed(passed => passed - 1);
            console.log(passed);
       
        }
       
    }


    useEffect(()=> {
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(res => {setDeckId(res.data.deck_id)})

    }, [])

    

    return (
        <>

        <div>
        <h3>Push Button</h3>
        <Card deckId = {deckId} passed={passed} handleSent={handleSent} arr ={arr}/>
        </div>
    

        </>
    )
}

export default Deck;