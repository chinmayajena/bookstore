import React from "react";
import BookStoreListView from "containers/BookStoreListView.js";
import AddBook from "containers/Addbook.js";
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
              <Link to="/createbook" className="nav-link">
                Add Book
              </Link>
            </Navbar.Collapse>
          </Navbar>
          <main className="mt-3 pt-5">
            <div className="container shadow p-4 mb-4 bg-white">
              <Switch>
                <Route exact path="/" component={BookStoreListView} />
                <Route path="/gridview" component={About} />
                <Route path="/createbook" component={AddBook} />
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
