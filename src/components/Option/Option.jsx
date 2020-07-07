import React, {useEffect} from 'react';

const Option = ({ onClick, value, text, clr}) => {
    
    const changeColor = e => {
        if(value) e.target.style = 'background-color: green'
        else e.target.style = 'background-color: red'
    }

    useEffect(() => {
        clr = '#60a3bc';
    })

    return (
        <button style={{backgroundColor : clr}} onClick={changeColor} value={value} > {text} </button>
    );
}

export default Option;