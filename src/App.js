import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={Create} exact />
            <Route path="/blogs/:id" component={BlogDetails} exact />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
