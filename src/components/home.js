import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Home extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        let {posts} =this.props;
        const postItems = posts.map(post =>(
            <div key = {post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <p>Home Page</p>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
  });

export default connect(mapStateToProps, { fetchPosts })(Home);