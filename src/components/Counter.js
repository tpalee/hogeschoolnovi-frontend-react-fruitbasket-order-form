import React from 'react';
import Button from "./Button";
import './Counter.css';

function Counter({count, setCount}) {



    const addItem = () => {
setCount(count+1)
    }


    const extractItem = () => {
        if(count>0){
setCount(count-1)}
    }

    return (
        <>
            <div className="countercontainer">
                <Button className="countbutton" onClick={extractItem}>-</Button>
                <p className="count">{count}</p>
                <Button className="countbutton" onClick={addItem}>+</Button>
            </div>
        </>


    )


}

export default Counter;