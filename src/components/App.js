import React from "react";
import BookStoreActionBar from "containers/BookStoreActionBar.js";
import BookStoreListView from "containers/BookStoreListView.js";

import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

const App = () => {
  const Index = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;
  const Users = () => <h2>Users</h2>;
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">bookstore!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Link to="/" className="nav-link">
                List View
              </Link>
              <Link to="/gridview" className="nav-link">
                Grid View
              </Link>
              <Link to="/bookaction" className="nav-link">
                Book Actions
              </Link>
            </Navbar.Collapse>
          </Navbar>
          <main class="mt-5 pt-5">
            <div className="container shadow p-4 mb-4 bg-white">
              <Switch>
                <Route exact path="/" component={BookStoreListView} />
                <Route path="/gridview" component={About} />
                <Route path="/bookaction" component={BookStoreActionBar} />
                {/* when none of the above match, <NoMatch> will be rendered */}
                <Route component={Index} />
              </Switch>
            </div>
          </main>
          /
        </div>
      </Router>
    </div>
  );
};
export default App;
