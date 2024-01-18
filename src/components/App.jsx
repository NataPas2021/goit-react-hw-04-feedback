import {useState} from 'react';
//import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import PropTypes from 'prop-types';

const feedbackOptions = ["good", "neutral", "bad"];

 const App = () => {
 const [options, setOptions] = useState({
  good: 0,
  neutral:0,
  bad:0,
 })

 const {good, neutral, bad} = options;
 

 const optionsFeedback = (option) => {
  setOptions(prevOptions => ({
    
    ...prevOptions,
    [option]: prevOptions[option] + 1
 }))
 }

 const countTotalFeedback = () => {
  const total = good + neutral + bad;
  console.log(total);
  return total;
 }

 const countPositiveFeedbackPercentage = () => {
  return Math.round(good*100/(good + neutral + bad));
 }


const existFeedback = countTotalFeedback();

 return (

      <div className='app-container'>
        <>
          <Section title="Please, leave feedback">
            <FeedbackOptions options={feedbackOptions} onLeaveFeedback={optionsFeedback}/>
          </Section>
        </>
        {existFeedback === 0 ? (
          <Notification message="Oops.There is no feedback yet"/>
        ) : (
          <>
           <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>
           </Section>
          </>
        )}
        
        
        
      </div>
    )
}

export default App;

//  export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   optionsFeedback = (e) => {
//     const option = e.target.name;
//     this.setState(prevState => {
//       return {[option]: prevState[option] + 1};
//         }
//     )
//   }
       
//   countTotalFeedback = () => { 
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
   
//   countPositiveFeedbackPercentage = () => {
//     return Math.round(this.state.good*100/(this.state.good + this.state.neutral + this.state.bad));
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const existFeedback = this.countTotalFeedback();
    
//   return (

//     <div className='app-container'>
//       <>
//         <Section title="Please, leave feedback">
//           <FeedbackOptions options={options} onLeaveFeedback={this.optionsFeedback}/>
//         </Section>
//       </>
//       {existFeedback === 0 ? (
//         <Notification message="Oops.There is no feedback yet"/>
//       ) : (
//         <>
//          <Section title="Statistics">
//           <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
//          </Section>
//         </>
//       )}
      
      
      
//     </div>
//   )
// }
// }


App.propTypes = {
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