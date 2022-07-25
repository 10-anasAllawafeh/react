import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';






class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
    };
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  logOut() {
    this.props.dispatch(logout());
  }
  render() {
    const { currentUser } = this.state;
    return (
      <>
      <Router history={history}>
        <header>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <p className="navbar-brand mt-3">
              Admin Dashboard
            </p>
            <div className="navbar-nav mr-auto">
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Admin
                  </Link>
                </li>
              )}
            </div>
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (<div className="navbar-nav ml-auto"></div>)}
          </nav>
          </header>
          <main>
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          </main>
        <footer className="bg-light text-center text-lg-start mt-5">
          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2020 Copyright:
            <a className="text-light" target={"_blank"} href="https://www.linkedin.com/in/anas-al-lawafeh-b05954232">Anas Allwafia</a>
          </div>
          {/* <!-- Copyright --> */}
      </footer>
      </Router>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(App);