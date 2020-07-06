import React from 'react';

import './QCard.css';

const QCard =  ({data}) => { 
    const question = data.question;
    const options = data.options;

    return (
    <div className="card">
        <span className="question-text">{question}</span>
    <div className="option-list">
        <button> {options[0].text} </button>
        <button> {options[1].text} </button>
        <button> {options[2].text} </button>
        <button> {options[3].text} </button>
    </div>
    </div>
)
};

export default QCard;
