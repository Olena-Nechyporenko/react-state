import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      <li>
        <button onClick={onLeaveFeedback} className={css.btn} name="good">
          Good
        </button>
      </li>
      <li>
        <button onClick={onLeaveFeedback} className={css.btn} name="neutral">
          Neutral
        </button>
      </li>
      <li>
        <button onClick={onLeaveFeedback} className={css.btn} name="bad">
          Bad
        </button>
      </li>
    </ul>
  );
};
