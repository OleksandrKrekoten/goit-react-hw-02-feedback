import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics ';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prev => ({
      [state]: prev[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => {
      acc += value;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.Good / this.countTotalFeedback()) * 100);
  };

  render() {
    const arrBtn = Object.keys(this.state);

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            arrBtn={arrBtn}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
              state={this.state}
            />
          </Section>
        )}
      </div>
    );
  }
}

