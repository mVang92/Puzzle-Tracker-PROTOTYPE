import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Puzzles from "./components/Puzzles";
import Customers from "./components/Customers";
import CustHist from "./components/CustHist";
import Transactions from "./components/Transactions";
import Mfgs from "./components/Mfgs";
import Comments from "./components/Comments";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Puzzles} />
          <Route exact path="/Customers" component={Customers} />
          <Route exact path="/Transactions" component={Transactions} />
          <Route exact path="/Mfgs" component={Mfgs} />
          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/CustHist" component={CustHist} />
        </div>
      </Router>
    )
  }
  
};

export default App;