import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";
class Profile extends Component {
  render() {
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.name}</strong> Profile
          </h3>
        </header>
        {/* <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p> */}
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Phone:</strong>
        <p>{currentUser.phone}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(Profile);