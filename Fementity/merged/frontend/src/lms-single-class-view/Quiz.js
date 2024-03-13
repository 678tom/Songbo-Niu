/**
 * Quiz Component.
 *
 * Author: Parker Verboom, 2022.
 */

import React, { Component } from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider, Button } from '@chakra-ui/react';

// create context
var answerArray = React.createContext();

// similar with answerArray, we should probably define the quiz JSON to be globally accessible
var quizJson = React.createContext();

class Quiz extends Component {
  /* 
    Prepare the Quiz component.
    Ideally we'll feed it an external data source.
  */
  constructor(props) {
    super(props);
    /*
      Load the quiz's contents into a data object.
      Right now we're going to do something incredibly ugly and define it all here.
    */
    quizJson = {
      quizTitle: 'Placeholder quiz',
      quiz: [
        {
          question:
            'What is the most commonly used placeholder text in web design?',
          answers: ['Lorem Ipsum', 'Not Lorem Ipsum'],
          correctAnswer: '0',
        },
        {
          question:
            'How much wood could a woodchuck chuck if a wood chuck could chuck wood?',
          answers: ['35', "Good Question! I don't know", '99999'],
          correctAnswer: '1',
        },
        {
          question:
            'Alice has 10 apples. Marisa took 1. How many apples does Alice have?',
          answers: ['0', '9'],
          correctAnswer: '1',
        },
      ],
    };

    // set the quiz title
    this.quizTitle = quizJson['quizTitle'];

    // for number of questions in quiz, create an boolean array to hold whether each question is correct or not.
    this.answerArray = quizJson['quiz'].length; //[false, false];

    // hold a variable for the total score.
    this.totalScore = 0;
  }

  /*
    Check answers. Called on submit.
  */
  checkAnswers() {
    // reset total score
    this.totalScore = 0;
    for (let i = 0; i < quizJson['quiz'].length; i++) {
      if (answerArray[i] == true) {
        this.totalScore += 1;
      }
    }
    alert('Your Score:' + this.totalScore + '/' + quizJson['quiz'].length);
  }

  /*
    Render the quiz. The <FormatQuestions /> element generats the question items.
  */
  render() {
    return (
      <ChakraProvider>
        <div className="Quiz">
          <form>
            <FormatQuestions />
            <Button onClick={() => this.checkAnswers()}>Submit</Button>
          </form>
        </div>
      </ChakraProvider>
    );
  }
}

class Question extends Component {
  // prepare question
  constructor(props) {
    super(props);

    console.log(props);

    this.questionText = props.questionText;
    this.questionId = props.questionId;
    this.options = quizJson['quiz'][this.questionId]['answers']; //['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    // variable to hold reference/index of the correct answer
    this.correctAnswer = quizJson['quiz'][this.questionId]['correctAnswer'];

    // variable to hold whether the selected option is correct or not.
    this.isQuestionCorrect = false;
  }

  // compare the selected option to the correct option, returns true or false.
  checkCorrectAnswer(comparisonValue) {
    this.isQuestionCorrect = comparisonValue == this.correctAnswer;
    answerArray[this.questionId] = this.isQuestionCorrect;
  }

  render() {
    // reference material -> https://reactjs.org/docs/forms.html
    return (
      <div>
        <legend>{this.questionText}</legend>
        <FormatOptions
          inputArray={this.options}
          questionId={this.questionId}
          onChange={(value) => this.checkCorrectAnswer(value)}
        ></FormatOptions>
      </div>
    );
  }
}

// function that formats a question itself, returns a set of elements..
function FormatOptions(props) {
  let items = [];
  for (let i = 0; i < props.inputArray.length; i++) {
    items.push(
      <div>
        <label>{props.inputArray[i]}</label>
        <input
          type="radio"
          name={props.questionId}
          id={i}
          value={i}
          onChange={(event) => props.onChange(event.target.value)}
        ></input>
      </div>,
    );
  }

  return <div>{items}</div>;
}

function FormatQuestions(props) {
  let items = [];
  for (let i = 0; i < quizJson['quiz'].length; i++) {
    items.push(
      <Question
        questionId={i}
        questionText={quizJson['quiz'][i]['question']}
      />,
    );
  }
  return <div>{items}</div>;
}

export default Quiz;
