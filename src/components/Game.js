import React, { Component } from "react";
import Question from './Question';

const dummyQuestion = {
  question: "What's the best programming language?",
  answerChoices: ['JavaScript', 'Java', 'C#', 'Swift'],
  answer: 0
};

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null
    }
  }

  //retrieve question set from API using Fetch API
  //convert that response to a format that we want
  //choose first question of array and pass it to question component

  async componentDidMount() {
    // Using Promises
    // const url =
    //   "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    // fetch(url)
    //   .then( res => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then(({ results }) => {
    //     console.log(results);
    //   })
    //   .catch( (err) => {
    //   console.error(err);
    // });

    // Using Async / Await
    const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    try {
      const res = await fetch(url);
      const { results } = await res.json();

      // map over questions from array, make a new 'loaded question' and assign it the property
      // of question from the loadedQuestion, and return the formatted question
      const questions = results.map( loadedQuestion => {
        const formattedQuestion = { 
          question: loadedQuestion.question,
          answerChoices: [...loadedQuestion.incorrect_answers]
        }

        formattedQuestion.answer = Math.floor(Math.random() * 4);

        formattedQuestion.answerChoices.splice(
          formattedQuestion.answer, 
          0, 
          loadedQuestion.correct_answer
        );

        return formattedQuestion;
      });
      console.log(questions);
      this.setState({questions, currentQuestion: questions[0]})
      console.log(questions)
    } catch (err) {
      console.error(err)
    }
  }

  render() { 
    return (
      <> 
        {this.state.currentQuestion && 
          <Question question={this.state.currentQuestion}/>
        }
      </>
    );
  }
}