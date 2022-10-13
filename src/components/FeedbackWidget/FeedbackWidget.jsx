import React from 'react';

export class Feetback extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
 
  render() {
   const countPositiveFeedbackPercentage=()=> {
     const { Good } = this.state;
     console.log();
    return Math.round((Good / countTotalFeedback()) * 100);
  }
  const  countTotalFeedback = () => {
      const valueArr = Object.values(this.state);
      return valueArr.reduce((acc, value) => {
        acc += value;
        return acc;
      });
    };
    const onLeaveFeedback = state => {
      this.setState(prevState => ({
        [state]: prevState[state] + 1,
      }));
    };
    const arrBtn = Object.keys(this.state);
    const { Good, Neutral, Bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          {arrBtn.map((el, i) => (
            <li key={i}>
              <button onClick={() => onLeaveFeedback(el)}>{el}</button>
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>
              Good: <span>{Good}</span>{' '}
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>{Neutral}</span>{' '}
            </p>
          </li>
          <li>
            <p>
              Bad: <span>{Bad}</span>{' '}
            </p>
          </li>
          <li>
            <p>
              Total: <span>{countTotalFeedback()}</span>
            </p>
          </li>
          <li>
            <p>
              Positive Feedback: <span>{countPositiveFeedbackPercentage()}</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
