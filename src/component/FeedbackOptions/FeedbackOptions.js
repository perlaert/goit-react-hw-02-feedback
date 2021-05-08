import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.feedbackList}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          className={style.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
