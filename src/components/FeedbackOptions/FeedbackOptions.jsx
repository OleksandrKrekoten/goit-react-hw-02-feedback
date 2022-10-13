import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ arrBtn, onLeaveFeedback }) => {
  return (
    <List>
      {arrBtn.map((el, i) => (
        <Item key={i}>
          <Button onClick={() => onLeaveFeedback(el)}>{el}</Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  arrBtn: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};