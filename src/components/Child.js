import React, { useContext} from 'react'; 
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log (counterValue)
    return (
            <div>
                <h2>This is first child</h2>
                <h2>Value of Counter by Context API is: {counterValue} </h2>
                <button onClick={ ()=> {counterValue[1](++counterValue[0])} }>Increment by Context API</button>
                <br/><br/>
                <button onClick={ ()=> {counterValue[1](--counterValue[0])} }>Decrement by Context API</button> 
                <br/> <br/> <br/> <br/>
            </div>
    )
}

export default Child; 