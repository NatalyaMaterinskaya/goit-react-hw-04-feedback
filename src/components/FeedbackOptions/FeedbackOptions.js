import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List, ListItem, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <ListItem key={nanoid()}>
          <Btn onClick={() => onLeaveFeedback(option)}>{option}</Btn>
        </ListItem>
      ))}
    </List>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
