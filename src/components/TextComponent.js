import React from 'react';


function TextComponent({name,type, formState, setFormState, onChange}) {

/*    function handler(e) {
        const value = e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        })
        console.log("hoi");
    }*/

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} value={formState.value} onChange={onChange}/>
        </>


    )


}

export default TextComponent;