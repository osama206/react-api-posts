import React from "react";
import "./PostList.css";

const PostList = ({ posts, setSelectedPost }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-item"
          onClick={() => setSelectedPost(post)}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
