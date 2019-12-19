import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div>{user.name}</div>;
  }
}

// ==============
const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => {
    if (user.id === ownProps.userId) {
      return user;
    }
  });
  return {
    user: user
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
