import React from "react";

function RadioButton({name,value,checked,onChange}) {

    return(
        <>
            <label>{value}
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
            </label>
        </>
    )
}

export default RadioButton;