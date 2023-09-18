import React from "react";

function Radio({ value, id: radioId, onChange, ...delegated }) {
    const generatedId = React.useId();
    const id = radioId || generatedId;

    return (
        <div>
            <label htmlFor={`radio-${id}`}>
                <input
                    {...delegated}
                    id={`radio-${id}`}
                    type="radio"
                    value={value}
                    onChange={onChange}
                />
                {value}
            </label>
        </div>
    );
}

export default Radio;
