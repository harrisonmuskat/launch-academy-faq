import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return(
      <div>
        <Question
          id = {this.props.questions.id}
          question = {this.props.questions.question}
          answer = {this.props.questions.answer}/>
      </div>
    );
  }
};

export default QuestionList;
