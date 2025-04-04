import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogsList.css';

class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get('http://localhost:3001/getposts')
            .then(result => {
                this.setState({ posts: result.data });
            })
            .catch(err => console.log(err));
    };

    formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    render() {
        return (
            <div className="blogslist-container">
                <h2 className="blogslist-title">Latest Blogs</h2>
                <div className="blogslist-grid">
                    {this.state.posts.map(post => (
                        <div key={post._id} className="blogslist-card">
                            <img src={`http://localhost:3001/Images/${post.file}`} alt={post.title} className="blogslist-image" />
                            <div className="blogslist-text">
                                <h3 className="blogslist-title-text">{post.title}</h3>

                                <div className="blogslist-meta">
                                    <p className="blogslist-author">By {post.username || 'Unknown'}</p>
                                    <p className="blogslist-date">{this.formatDate(post.createdAt)}</p>
                                </div>

                                {/* <p className="blogslist-description">{post.description}</p> */}
                                <Link to={`/post/${post._id}`}>
                                    <button className="blogslist-more-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default BlogsList;
