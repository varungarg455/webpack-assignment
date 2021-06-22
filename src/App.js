import React, { lazy, Suspense } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Dashboard = lazy(() => import('./Dashboard'))

function App() {
    return <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<div>Loading... </div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          </Suspense>
      </div>
    </Router>
}


export default App