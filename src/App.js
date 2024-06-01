import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PostList posts={filteredPosts} setSelectedPost={setSelectedPost} />
      {selectedPost && <PostDetail postId={selectedPost.id} />}
    </div>
  );
};

export default App;
