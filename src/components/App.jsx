import css from "./App.module.css";
import Feedback from "./Feedback/Feedback";


function App() {
 return (
  <div className={css.appContainer}>
    <Feedback />
  </div>
 )
}

export default App;