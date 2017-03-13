import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedQuestionId: null}
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(id) {
    this.setState( {selectedQuestionId: id});
  }

  render() {
    let questionList = this.props.questions.map((question) => {
      let selected = "hideClass";

      if (question.id === this.state.selectedQuestionId) {
        selected = "showClass";
      }

      let onQuestionClick = () => this.handleQuestionClick(question.id);
      return (
        <Question
          key = {question.id}
          question = {question.question}
          answer = {question.answer}
          selected = {selected}
          handleQuestionClick = {onQuestionClick}/>
      )
    });

    return (
      <ul class="vertical menu" data-accordion-menu>{questionList}</ul>
    );
  }
}


export default QuestionList;
