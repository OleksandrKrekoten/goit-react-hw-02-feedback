import PropTypes from 'prop-types';
import { List } from './Statistics.styled';
export const Statistics = ({
  countPositiveFeedbackPercentage,
  countTotalFeedback,
  state,
}) => {
  const { Good, Neutral, Bad } = state;
  return (
    <List>
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
          Positive Feedback: <span>{countPositiveFeedbackPercentage()}%</span>
        </p>
      </li>
    </List>
  );
};
Statistics.propTypes = {
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  state: PropTypes.shape({
    Good: PropTypes.number,
    Neutral: PropTypes.number,
    Bad: PropTypes.number,
  }).isRequired,
};