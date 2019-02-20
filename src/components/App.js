import React from "react";
import BookStoreListView from "containers/BookStoreListView.js";
import BookStoreGridView from "containers/BookStoreGridView.js";
import AddBook from "containers/Addbook.js";
import EditBook from "containers/Editbook.js";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Navbar,
  NavItem,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import BookStoreFilter from "containers/BookStoreFilter.js";

const App = () => {
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
              <Form className="navbar-right ml-auto">
                <BookStoreFilter />
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Container className="mt-3 pt-5">
            <div className="container shadow p-4 mb-4 bg-white">
              <Switch>
                <Route exact path="/" component={BookStoreListView} />
                <Route path="/gridview" component={BookStoreGridView} />
                <Route path="/createbook" component={AddBook} />
                <Route path="/editbook" component={EditBook} />
                {/* when none of the above match, <NoMatch> will be rendered */}
                <Route component={BookStoreListView} />
              </Switch>
            </div>
          </Container>
          /
        </div>
      </Router>
    </div>
  );
};
export default App;
