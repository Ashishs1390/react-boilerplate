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
        console.log(this.props.posts);

        return (
            <div>
                <p>Home Page</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
  });

export default connect(mapStateToProps, { fetchPosts })(Home);