import React, { Component } from "react";
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper';

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
    try {
      const questions = await loadQuestions(); 
      this.setState({ questions, currentQuestion: questions[0] });
      console.log(questions);
    } catch (err) {
      console.log(err)
    }
  }

  render() { 
    return (
      <> 
        {this.state.currentQuestion && 
          <Question question={this.state.currentQuestion} />
        }
      </>
    );
  }
}