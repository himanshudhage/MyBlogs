import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get('http://localhost:3001/getposts')
            .then(result => {
                setPosts(result.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="post_container">
            {posts.map(post => (
                <Link to={`/post/${post._id}`} key={post._id} className="post_link">
                    <div className="post">
                        <img src={`http://localhost:3001/Images/${post.file}`} alt={post.title} />
                        <div className="post_text">
                            <p>{post.title}</p>
                            <p>{post.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Home;
