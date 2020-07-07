import React from 'react';

import './QCard.css';
import Option from '../Option/Option';

const QCard =  ({data}) => { 
    const question = data.question;
    const options = data.options;

    return (
    <div className="card">
        <span className="question-text">{question}</span>
        <div className="option-list">
            {options.map((option, index) => {
                return (< Option key={index} text={option.text} value={option.isCorrect} clr="#60a3bc" />)
            })}
        </div>
    </div>
)
};

export default QCard;
