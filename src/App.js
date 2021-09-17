import React from 'react';
import './App.css';
import TextComponent from "./components/TextComponent";
import FruitComponent from "./components/FruitComponent";
import Button from "./components/Button";


function App() {
//useState objecten
    const [bananenCount, setBananenCount] = React.useState(0);
    const [aardbeienCount, setAardbeienCount] = React.useState(7);

    const [formState, setFormState] = React.useState({
            name: '',
            age: '',
            test: '',
            deliverfrequency: 'Om de week',
        daypart:'daypart',
        }
    )

    //formState function
    function handler(e) {
        const value = e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        })
        console.log("hoi")
    }

    //function that logs all the values of the form to the console
    function handleSubmit(e) {
        console.log(formState);
        e.preventDefault();
    }


    const resetCounter = () => {
        setAardbeienCount(0);
        setBananenCount(0);
    }

    return (


        <>
            <div className="wrappingcontainer">
                <h1>Fruitmand bezorgservice</h1>

                <div className="fruitcontainer">
                    <FruitComponent name="bananen" count={bananenCount} setCount={setBananenCount} fruit="🍌" fruitName="Bananen"/>
                    <FruitComponent name="aardbeien"count={aardbeienCount} setCount={setAardbeienCount} fruit="🍓" fruitName="Aardbeien"/>

                    <Button className="resetButton" buttonHandler={resetCounter}>reset</Button>
                </div>


                <form className='form-container' onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Gegevens</legend>

                        <label htmlFor="name">Naam:</label>
                        <input type="text" name="name" onChange={handler} value={formState.name}/>

                        <label htmlFor="age">Leeftijd:</label>
                        <input type="number" value={formState.age} onChange={handler} name="age"/>

                        <TextComponent type="text"
                                       name="test"
                                       onChange={handler}
                                       value={formState.test}
                                       formState={formState}
                                       setFormState={setFormState}
                        >
                        </TextComponent>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="deliverfrequency">Hoe hebt u ons gevonden?</label>
                        <select value={formState.findedus} onChange={handler} name="findedus" id="findedus">
                            <option>Iedere week</option>
                            <option>Om de week</option>
                            <option>Iedere maand</option>
                        </select>
                        <div>
                            <label name="timeblock">
                                <input
                                    type="radio"
                                    name="daypart"
                                    value="overdag"
                                    checked={formState.day === "overdag"}
                                    onChange={handler}
                                />
                                Overdag
                            </label>
                        </div>

                    </fieldset>

                    <button type="submit">Versturen</button>
                </form>
            </div>
        </>
    );
}

export default App;