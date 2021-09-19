import React from 'react';
import Counter from "./Counter";
import './FruitComponent.css';

function FruitComponent({fruit, count, setCount,fruitName, name}) {

    return (
        <>
            <div className="fruitcomponentcontainer">
                <p className="fruiticons" fruit={fruit}>{fruit}</p>
                <p className="fruitnames" fruitname={fruitName}>{fruitName}</p>
                <Counter name={name} count={count} setCount={setCount}/>
            </div>

        </>


    )


}

export default FruitComponent;