import {JAVA_RESULTS, HTML_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS} from "./data.js"; 
import Header from "./components/Header.jsx"
import Score from "./components/Score.jsx"


function App() {
  return (
    <>
   <Header batchName="fake" />
      <main className="scores-container">
        <div className="scores"><Score
            courseResult={HTML_RESULTS}
            courseName="HTML"
            /></div>
        <div className="scores"><Score
            courseResult={JAVA_RESULTS}
            courseName={"JAVA"}
            /></div>
        <div className="scores"><Score
            courseResult={PYTHON_RESULTS}
            courseName={"PYTHON"}
            /></div>
        <div className="scores"><Score
            courseResult={ENGLISH_RESULTS}
            courseName={"ENGLISH"}
            /></div>
      </main>
    </>
  );
}

export default App;
