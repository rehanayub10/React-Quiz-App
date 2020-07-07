import React, {useState} from 'react';

import './App.css';
import QCard from './components/QCard/QCard';
import StateBtn from './components/StateBtn/statebtn';

const App = () => {

  let index = 0;
  const questions = [
    {
      question: "Practice Question : What is 2 + 2?",
      options : [
        { text : "2", isCorrect : false},
        { text : "4", isCorrect : true},
        { text : "22", isCorrect : false},
        { text : "0", isCorrect : false},
      ] 
    } , 
    {
      question: "Mercury is the closest planet to the sun in our solar system. What is its average nightime temperature (in degrees Celsius)?",
      options : [
        { text : "350", isCorrect : false},
        { text : "1000", isCorrect : false},
        { text : "-170", isCorrect : true},
        { text : "0", isCorrect : false},
      ] 
    }
  ];

  const [displayQuestion, setDisplayQuestion] = useState(questions[0]);

  const appendQuestion = index => {
    index++;
    setDisplayQuestion(questions[index]);
  }

  return (
    <div>
      <div className="phone">
      <img src="https://images.ctfassets.net/szuukvy7owq5/3FSAHVjls9nJFywFMqHq6z/420f3df9f3939164b0a2389bf7298bb2/iphone_8_front_spgry.png?fm=webp" alt="IPhone UI" />
      </div>
      <QCard data={displayQuestion}/>
      <StateBtn fn={() => appendQuestion(index)} text="Next Question"/>
    </div>
  )
}

export default App;