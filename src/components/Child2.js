import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';


const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 10);

    console.log (state);
    return (
        <div>
            <h2>This is Second child</h2>
            <h2>Value of Counter by Reducer State is: {state} </h2>
            <button onClick={()=> dispatch('INCREMENT')}>Increment by Reducer</button>
            <br/><br/>
            <button onClick={()=> dispatch('DECREMENT')}>Decrement by Reducer</button>            
        
        </div>
    )

}

export default Child2