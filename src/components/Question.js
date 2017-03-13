import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return(
      <div>
        <p>{this.props.question}</p>
        <p>{this.props.answer}</p>
      </div>
    );
  }
};

export default Question;
