import React from 'react';
import Child from './Child.js';

const Parent = (props) => {
    return (

        <Child name= {props.name}/>

    )
}

export default Parent;