import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />

        {/* <Route path="/whatiscovid">
            <Whatiscovid />
        </Route> */}
      </Switch>

    </Router>
  );
}

export default App;
