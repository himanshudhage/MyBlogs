import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/editpost/${id}`, { title, description })
            .then(res => {
                if (res.data === "Success") {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/getpostbyid/${id}`)
            .then(result => {
                setTitle(result.data.title);
                setDescription(result.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="post_container">
            <div className="post_form">
                <form onSubmit={handleSubmit}>
                    <h2>Update Post</h2>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        value={description}
                        placeholder="Enter Description"
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditPost;
