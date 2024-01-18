import { useState } from 'react';
//import css from './Feedback.module.css'
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from 'components/Statistics/Statistics';
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import PropTypes from 'prop-types';

const Feedback = () => {
 const [options, setOptions] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
 })

 const {good, neutral, bad} = options;
 
 const countTotalFeedback = () => {
  return good + neutral + bad;
 }

 const countPositiveFeedbackPercentage = (keyName) => {
  const total = countTotalFeedback();
  const value = options[keyName]; 
  return Math.round(value*100/(total));
 }

 const leaveFeedback = (e) => {
  const option = e.target.name;
  setOptions(prevState => ({
    ...prevState,
    [option]: prevState[option] + 1
 }))
 
 }

const feedBackOptions = Object.keys(options);
const existFeedback = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage('good');


 return (
    <div>
        <>
          <Section title="Please, leave feedback">
            <FeedbackOptions options={feedBackOptions} onLeaveFeedback={leaveFeedback}/>
          </Section>
        </>
        {existFeedback === 0 ? (
          <Notification message="Oops.There is no feedback yet"/>
        ) : (
          <>
           <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={existFeedback} positivePercentage={positivePercentage}/>
           </Section>
          </>
        )}
    </div>    
    )
}

export default Feedback;


Feedback.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
}