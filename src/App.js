import RatingComponent from "./RatingComponent";
import ThankYou from "./ThankYou";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RatingComponent
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </Route>
          <Route path="/thankyou">
            <ThankYou selectedRating={selectedRating} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
