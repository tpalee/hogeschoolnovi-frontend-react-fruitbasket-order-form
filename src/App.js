import React from 'react';
import './App.css';
import TextComponent from "./components/TextComponent";
import FruitComponent from "./components/FruitComponent";
import Button from "./components/Button";
import RadioButton from "./components/RadioButton";


function App() {
    //useState objects, to store and set the state of the fruit-counters;
    const [bananenCount, setBananenCount] = React.useState(0);
    const [aardbeienCount, setAardbeienCount] = React.useState(0);
    const [appelsCount, setAppelsCount] = React.useState(0);
    const [kiwisCount, setKiwisCount] = React.useState(0);

    // store all the states of the form in one UseState
    const [formState, setFormState] = React.useState({
            firstname: '',
            lastname: '',
            age: '',
            postcode: '',
            deliverfrequency: 'Om de week',
            radio: 'radio',
            comments: '',
            check: false
        }
    )

    //formState function
    function handler(e) {
        //if the triggered event is a checkbox, value= true/false,
        //else value=e.target.value
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            //spread operator
            ...formState,
            [e.target.name]: value
        })
    }

    //function that logs all the values of the form to the console
    function handleSubmit(e) {
        console.log(
            `Bestelling: 
            Aardbeien: ${aardbeienCount},
            Bananen: ${bananenCount},
            Appels: ${appelsCount},
            Kiwi's: ${kiwisCount},
            Voornaam: ${formState.firstname}, 
            achternaam: ${formState.lastname}, 
            leeftijd: ${formState.age},
            postcode: ${formState.postcode},
            bezorgfrequentie: ${formState.deliverfrequency},
            dagdeel: ${formState.radio},
            opmerkingen: ${formState.comments},
            akkoord met voorwaarden: ${formState.check}`
        );
        e.preventDefault();
    }

    //function sets initial state of all counters to 0
    const resetCounter = () => {
        setAardbeienCount(0);
        setBananenCount(0);
        setAppelsCount(0);
        setKiwisCount(0);
    }


    return (
        <>
            <div className="wrappingcontainer">

                {/*container with the title and fruitcounters*/}
                <div className="fruitcontainer">
                    <h1>Fruitmand bezorgservice</h1>
                    <FruitComponent name="bananen" count={bananenCount} setCount={setBananenCount} fruit="🍌"
                                    fruitName="Bananen"/>
                    <FruitComponent name="aardbeien" count={aardbeienCount} setCount={setAardbeienCount} fruit="🍓"
                                    fruitName="Aardbeien"/>
                    <FruitComponent name="appels" count={appelsCount} setCount={setAppelsCount} fruit="🍏"
                                    fruitName="Appels"/>
                    <FruitComponent name="kiwis" count={kiwisCount} setCount={setKiwisCount} fruit="🥝"
                                    fruitName="Kiwi's"/>
                    <Button className="resetbutton" onClick={resetCounter}>reset</Button>
                </div>

                {/*form*/}
                <form className='form-container' onSubmit={handleSubmit}>

                    <legend>Gegevens</legend>
                    {/*Textcomponent firstname*/}
                    <TextComponent type="text"
                                   name="firstname"
                                   onChange={handler}
                                   value={formState.firstname}
                                   formState={formState}
                                   setFormState={setFormState}
                    />

                    {/*Textcomponent lastname*/}
                    <TextComponent type="text"
                                   name="lastname"
                                   onChange={handler}
                                   value={formState.lastname}
                                   formState={formState}
                                   setFormState={setFormState}
                    />

                    {/*Textcomponent age*/}
                    <TextComponent type="number"
                                   name="age"
                                   onChange={handler}
                                   value={formState.age}
                                   formState={formState}
                                   setFormState={setFormState}
                    />

                    {/*Textcomponent zipcode*/}
                    <TextComponent type="text"
                                   name="postcode"
                                   onChange={handler}
                                   value={formState.postcode}
                                   formState={formState}
                                   setFormState={setFormState}
                    />

                    {/*Select bezorgfrequentie*/}
                    <label htmlFor="deliverfrequency">Bezorgfrequentie</label>
                    <select value={formState.deliverfrequency} onChange={handler} name="deliverfrequency"
                            id="deliverfrequency">
                        <option>Iedere week</option>
                        <option>Om de week</option>
                        <option>Iedere maand</option>
                    </select>

                    {/*Radiocomponents daypart*/}
                    <div className="radiobuttoncontainer">
                        <RadioButton
                            name="radio"
                            value="overdag"
                            checked={formState.radio === "overdag"}
                            onChange={handler}
                        />
                        <RadioButton
                            name="radio"
                            value="avond"
                            checked={formState.radio === "avond"}
                            onChange={handler}
                        />
                    </div>

                    {/*textarea opmerkingen*/}
                    <label htmlFor="comments">opmerking</label>
                    <textarea id="comments" onChange={handler} name="comments"></textarea>

                    {/*checkbox*/}
                    <label>
                        Ik ga akkoord met de voorwaarden
                        <input
                            type="checkbox"
                            name="check"
                            checked={formState.check}
                            onChange={handler}
                        />
                    </label>
                    {/*submitbutton that submits the form*/}
                    <Button className="submitbutton" type="submit">Versturen</Button>

                </form>
            </div>
        </>
    );
}

export default App;