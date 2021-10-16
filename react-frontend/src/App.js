import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import VIewEmployeeComponent from "./components/VIewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent></HeaderComponent>

        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            {/* <Route
              path="/update-employee/:id"
              component={UpdateEmployeeComponent}
            ></Route> */}
            <Route
              path="/view-employee/:id"
              component={VIewEmployeeComponent}
            ></Route>
          </Switch>
        </div>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
