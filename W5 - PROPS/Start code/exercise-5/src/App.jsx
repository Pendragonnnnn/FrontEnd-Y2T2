import { Card } from "./components/card";
import { ALL_CARDS } from "./data";



function App() {
  return (
  <>
  <h1>Games</h1>
  <div className="card-wrapper">
    <ul className="card">
    {ALL_CARDS.map((card) => (
      <Card 
      prop = {card}
      />
    ))}
  </ul>
  </div>
  </>
  );
}

export default App;
