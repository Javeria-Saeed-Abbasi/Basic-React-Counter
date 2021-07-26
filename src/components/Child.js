import React, { useContext} from 'react'; 
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log (counterValue)
    return (
            <div>
                <h2>This is first child</h2>
                <h2>Counter Value is: {counterValue} </h2>
                <button onClick={ ()=> {counterValue[1](++counterValue[0])} }>INC</button>
                
            </div>
    )
}

export default Child; 