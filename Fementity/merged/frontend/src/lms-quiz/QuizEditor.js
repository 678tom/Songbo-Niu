/**
 * Web-based GUI editor for quiz json files.
 *
 * Author: Parker Verboom, 2022.
 */
// import './App.css';

// 1. import `ChakraProvider` component
import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Flex,
} from '@chakra-ui/react';

// we're modifying an entire JSON. I'm using context for this.
var quizJson = React.createContext;

export default function QuizEditor({ quizFile }) {
  const [data, setData] = useState();
  const [blah, setBlah] = useState();

  useEffect(() => {
    fetch(quizFile)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  quizJson = data;
  console.log(data?.quiz[0].question);
  //console.log(quizJson.quiz[1].question);

  const addQuestion = () => {
    // push question
    quizJson.quiz.push({
      question: 'Question',
      answers: ['Answers 1', 'Answer 2'],
      correctAnswer: '0',
    });

    // call rerender
    let rerender = quizJson;

    console.log(quizJson.quiz[quizJson.quiz.length - 1]);

    // figure out best way to re-render.
    setBlah({});
  };

  const removeQuestion = (event) => {
    if (quizJson.quiz.length > 1) {
      // add answer to quiz json
      quizJson.quiz.pop();

      // figure out best way to re-render.
      setBlah({});
    }
  };

  return (
    <div>
      <FormControl>
        <TitleEditor />
        <Button>Save Quiz</Button>
        <>
          {quizJson?.quiz.map(({ question }, i) => (
            <QuestionEditor
              questionText={quizJson?.quiz[i].question}
              answers={quizJson?.quiz[i].answers}
              questionId={i}
            />
          ))}
        </>
        <Button onClick={() => addQuestion()}>Add Question</Button>
        <Button onClick={() => removeQuestion()}>Remove Question</Button>
      </FormControl>
    </div>
  );
}

function TitleEditor() {
  return (
    <div>
      <FormLabel>Title:</FormLabel>
      <Input placeholder="Title" />
    </div>
  );
}

function QuestionEditor({ questionText, answers, questionId, ...props }) {
  const [answersEditable, setAnswersEditable] = useState();

  // on change function that updates global json data for questions + answers
  const updateJson = (event) => {
    quizJson.quiz[questionId].questionText = event.target.value;
    //setAnswersEditable(quizJson.quiz[questionId].answers);
    //console.log(quizJson?.quiz[questionId].questionText);
  };

  const addAnswer = (event) => {
    //debugger;
    // add answer to quiz json: TODO; figure out why it isn't rerendering more than once.
    quizJson.quiz[questionId].answers.push('Answer ' + answers.length);
    console.log(answers.length);

    let rerender = new Array(answers);

    // figure out best way to re-render.
    setAnswersEditable(rerender);
  };

  const removeAnswer = (event) => {
    if (quizJson.quiz[questionId].answers.length > 2) {
      // add answer to quiz json
      quizJson.quiz[questionId].answers.pop();

      let rerender = new Array(answers);

      // figure out best way to re-render.
      setAnswersEditable(rerender);
    }
  };

  const updateCorrectAnswer = (newValue) => {
    quizJson.quiz[questionId].correctAnswer = newValue;

    console.log(
      'correct answer is now: ' + quizJson.quiz[questionId].correctAnswer,
    );
  };

  const updateAnswerText = (newValue) => {
    console.log(newValue.target.value);
    quizJson.quiz[newValue.target.id].questionText = newValue.target.value;
    console.log(quizJson.quiz[newValue.target.id].questionText);
  };

  return (
    <div>
      <FormLabel>Question:</FormLabel>
      <Input defaultValue={questionText} onChange={updateJson} />
      <FormLabel>Answers:</FormLabel>
      <RadioGroup
        defaultValue={'value ' + quizJson.quiz[questionId].correctAnswer}
        name={questionId}
      >
        <>
          {answers.map(({ answer }, i) => (
            <Flex direction={'row'}>
              <Radio
                value={'value ' + i}
                onChange={() => updateCorrectAnswer(i)}
              />
              <Input
                defaultValue={answers[i]}
                id={i}
                onChange={updateAnswerText}
              />
            </Flex>
          ))}
        </>
      </RadioGroup>
      <Button onClick={() => addAnswer()}>+</Button>
      <Button onClick={() => removeAnswer()}>-</Button>
    </div>
  );
}
