import React from 'react';
// import thumbsup from '../../public/images/thumbsup.png';
// import thumbsdown from '../../public/images/thumbsdown.png';

export class UpDown extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div>
        <div>{this.state.score}</div>
        <button className="Like" onClick={this.increment}>Up</button>
        <button className="Dislike" onClick={this.decrement}>Down</button>
      </div>
    );
  }

  increment() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  decrement() {
    this.setState({
      score: this.state.score - 1,
    });
  }
}