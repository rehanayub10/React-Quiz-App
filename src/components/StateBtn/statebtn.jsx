import React from 'react';

import './statebtn.css';

const StateBtn = ({text, startFn}) => {
    return (
        <button onClick = {startFn()} className="statebtn"> {text} </button>
    )
}

export default StateBtn;