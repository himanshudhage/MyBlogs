import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Post.css";
import { userContext } from "./App";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();
  const user = useContext(userContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/getpostbyid/${id}`)
        .then(result => {
            setPost(result.data);
            setLikes(result.data.likes || 0);
            setComments((result.data.comments || []).reverse()); // 👈 here too
        })
        .catch(err => console.log(err));
}, [id]);


  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deletepost/${id}`)
      .then((result) => {
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleLike = () => {
    const newLikeStatus = !liked;
    const updatedLikes = newLikeStatus ? likes + 1 : likes - 1;
    setLiked(newLikeStatus);
    setLikes(updatedLikes);

    axios
      .post(`http://localhost:3001/likepost/${post._id}`, {
        userEmail: user.email,
        liked: newLikeStatus,
      })
      .catch((err) => console.log(err));
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() === "") return;

    const newComment = {
      text: commentText,
      user: user.username || "Anonymous",
      timestamp: new Date().toISOString(),
    };

    axios
      .post(`http://localhost:3001/commentpost/${post._id}`, newComment)
      .then((res) => {
        if (res.data && res.data.comments) {
          setComments(res.data.comments);
        } else {
          setComments((prev) => [...prev, newComment]);
        }
        setCommentText("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="post_container">
      {/* Post Content */}
      <div className="post_content">
        <img
          src={`http://localhost:3001/Images/${post.file}`}
          alt={post.title}
        />
        <h2>{post.title}</h2>
        <p>{post.description}</p>

        <div className="like_comment_section">
          <button
            style={{ background: "grey" }}
            onClick={toggleLike}
            className="like_button"
          >
            {liked ? "❤️" : "🤍"} {likes} Likes
          </button>
        </div>

        {user.email === post.email && (
          <div className="post_actions">
            <Link to={`/editpost/${post._id}`}>Edit</Link>
            <button
              style={{ background: "red" }}
              onClick={() => handleDelete(post._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Comment Section (moved below post_content) */}
      <div className="comment_section_below">
        <h3>Comments</h3>

        <div className="comment_input_box">
          <div className="avatar">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleCommentSubmit}>Comment</button>
        </div>

        {comments.length === 0 && (
          <p className="no_comments">No comments yet. Be the first!</p>
        )}

        <div className="comments_list">
          {comments.map((cmt, index) => (
            <div className="comment_item" key={index}>
              <div className="avatar">{cmt.user.charAt(0).toUpperCase()}</div>
              <div className="comment_text">
                <strong>{cmt.user}</strong>
                <p>{cmt.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
