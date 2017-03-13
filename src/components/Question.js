import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        <a className = "question" href="#" onClick={this.props.handleQuestionClick}>{this.props.question}</a>
        <ul class="menu vertical nested">
          <li className={this.props.selected}>{this.props.answer}</li>
        </ul>
      </li>
    );
  }
};

export default Question;
