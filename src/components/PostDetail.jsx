import React, { useState, useEffect } from "react";
import "./PostDetail.css";

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  if (!post) return null;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
