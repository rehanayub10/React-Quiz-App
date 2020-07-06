import React from 'react';

import './statebtn.css';

const StateBtn = ({text, fn}) => {
    return (
        <button onClick = {fn} className="statebtn"> {text} </button>
    )
}

export default StateBtn;