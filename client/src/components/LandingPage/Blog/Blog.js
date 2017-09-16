import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingMenuBar from '../LandingMenuBar';
import { getBlogPosts } from '../../../actions/blog';

class Blog extends Component {
  componentDidMount() {
    this.props.getBlogPosts();
  }

  render() {
    const style = {
      blogContainer: {
        marginLeft: '10%',
        backgroundColor: '#f2f2f2',
        height: 'auto',
        width: '50%',
        padding: '20px',
        paddingBottom: '40px'
      }
    };

    const posts = this.props.posts ? this.props.posts : [];
    const posts_jsx = posts.map(post => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div style={style.container}>
        <LandingMenuBar blogActive={true}/>
        <div style={style.blogContainer}>
          {posts_jsx}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.blog;
};

const mapDispatchToProps = {
  getBlogPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);