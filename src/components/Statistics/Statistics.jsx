import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage  }) => {
    return (
        <>
        <p className={css.statisticsFeedback}>Good: {good}</p>
        <p className={css.statisticsFeedback}>Neutral: {neutral}</p>
        <p className={css.statisticsFeedback}>Bad: {bad}</p>
        <p className={css.statisticsFeedback}>Total: {total}</p>
        <p className={css.statisticsFeedback}>Positive feedback: {positivePercentage} %</p>
        </>
    );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}