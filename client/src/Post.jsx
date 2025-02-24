import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Post.css';
import { userContext } from './App';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const user = useContext(userContext);

    useEffect(() => {
        axios.get(`http://localhost:3001/getpostbyid/${id}`)
            .then(result => setPost(result.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deletepost/${id}`)
            .then(result => {
                if (result.data === "Success") {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="post_container">
            <div className="post_content">
                <img src={`http://localhost:3001/Images/${post.file}`} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div>
                    {
                        user.email === post.email && (
                            <>
                                <Link to={`/editpost/${post._id}`}>Edit</Link>
                                <button onClick={() => handleDelete(post._id)}>Delete</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Post;
