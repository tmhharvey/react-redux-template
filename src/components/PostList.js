import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Row, Col, Alert } from "reactstrap";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount = async () => {
    this.props.fetchPosts();
  };

  renderList() {
    console.log(this.props.posts);
    return this.props.posts.map(post => {
      return (
        <>
          <Row key={post.id} className="mt-3">
            <Col sm={{ size: 8, offset: 2 }} className="text-center">
              <h2>{post.title}</h2>
              <Alert color="primary">{post.body}</Alert>
              <UserHeader userId={post.userId}></UserHeader>
            </Col>
          </Row>
          <hr></hr>
        </>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}
// ==========
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
