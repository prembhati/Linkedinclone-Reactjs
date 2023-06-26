import Home from "./pages/home";
import Notification from "./pages/notification";
import Jobs from "./pages/jobs";
import Mynetwork from "./pages/mynetwork";
import logo from "./logo.svg";
import "./style.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function App() {
  return <Home />;  
} 

function App() {
  return <Mynetwork />;  
} 

function App() {
  return <Jobs />;  
} 

function App() {
  return <Notification />;  
} 



export default App;
