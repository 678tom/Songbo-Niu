/**
 * Quiz Component.
 *
 * Author: Parker Verboom, 2022.
 * Nicholas Deschenes: Code refactoring (thanks again).
 */

import React, { useState, useEffect } from 'react';
// import './App.css';

// 1. import `ChakraProvider` component
import {
  ChakraProvider,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Flex,
} from '@chakra-ui/react';

// create context for answer array
var answerArray = React.createContext();

export default function Quiz({ quizFile }) {
  const [data, setData] = useState();
  const [quizTitle, setQuizTitle] = useState();

  useEffect(() => {
    fetch(quizFile)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setQuizTitle(data.quizTitle);
        answerArray = new Array(data.quiz.length);
      });
  }, []);

  const checkAnswers = () => {
    // reset total score
    let totalScore = 0;
    for (let i = 0; i < data.quiz.length; i++) {
      console.log(answerArray[i]);
      if (answerArray[i] == true) {
        totalScore += 1;
      }
    }
    alert('Your Score:' + totalScore + '/' + data.quiz.length);
  };

  return (
    <ChakraProvider>
      <div className="Quiz">
        <FormControl>
          <FormatQuestions data={data} />
          <Button onClick={() => checkAnswers()}>Submit</Button>
        </FormControl>
      </div>
    </ChakraProvider>
  );
}

function Question({
  questionText,
  questionId,
  options,
  correctAnswer,
  isQuestionCorrect,
  ...props
}) {
  //console.log(options);

  const checkCorrectAnswer = (val) => {
    isQuestionCorrect = val == correctAnswer;
    answerArray[questionId] = isQuestionCorrect;
    return isQuestionCorrect;
  };

  return (
    <div>
      <legend>{questionText}</legend>
      <FormatAnswers
        inputArray={options}
        questionId={questionId}
        onChange={(value) => checkCorrectAnswer(value)}
      ></FormatAnswers>
    </div>
  );
}

// function that formats the questions, returns a select element to put into the main question body.
function FormatAnswers(props) {
  return (
    <>
      {props.inputArray.map((inputArray, i) => (
        <div>
          <input
            type="radio"
            name={props.questionId}
            id={i}
            value={i}
            onChange={(event) => props.onChange(event.target.value)}
          ></input>
          <label>{props.inputArray[i]}</label>
        </div>
      ))}
    </>
  );
}

function FormatQuestions({ data }) {
  return (
    <>
      {data?.quiz.map(({ question }, i) => (
        <Question
          key={i}
          questionId={i}
          questionText={question}
          options={data?.quiz[i].answers}
          correctAnswer={data?.quiz[i].correctAnswer}
        />
      ))}
    </>
  );
}
