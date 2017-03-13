import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return(

      let questionList = this.props.questions.map((question) => {
        return (
          <Question
            id = {this.props.questions.id}
            question = {this.props.questions.question}
            answer = {this.props.questions.answer}/>
        )
      })

    );
    return (
      <ul>{questionList}</ul>
    )
  }
};


export default QuestionList;
