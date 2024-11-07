"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchPosts } from "../../../components/FetchPosts";
import SearchInput from "../../../components/SearchInput";
import { handleDelete } from "../../../modules/handleDelete";
import { addPost } from "../../../modules/addPost";
import { editPost } from "../../../modules/editPost";
import NotFoundPage from "../../not-found";
import "../../../../index.css";
import "./index.css";

const PostsPage = ({ searchParams }) => {
  const { search, sortBy = "", order = "" } = searchParams;
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts(search, sortBy, order);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
        setError("Error loading posts");
      }
    };
    loadPosts();
  }, [search, sortBy, order]);

  if (error) {
    return <NotFoundPage />;
  }

  const onDelete = (id) => {
    handleDelete(posts, "posts", id, setPosts);
  };

  const onEdit = (post) => {
    setNewPost(post);
    setEditingPost(post);
  };

  const handleSubmit = () => {
    if (editingPost) {
      editPost(posts, setPosts, { ...editingPost, ...newPost });
      setEditingPost(null);
    } else {
      addPost(posts, setPosts, newPost, setNewPost);
    }
    setNewPost({ title: "", body: "" });
  };

  return (
    <section className="posts-section p-7 bg-postBackground w-screen text-formText">
      <h1 className="text-center text-3xl font-semibold">All Posts</h1>
      <div className="search-sort__wrapper">
        <SearchInput searchPath="posts" supportsBodySort="true" />
      </div>
      <div className="search-container">
        <div className="search-input-wrapper text-textBlack">
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="search-input text-black"
          />
          <textarea
            placeholder="Body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            className="search-input"
          />
          <button onClick={handleSubmit} className="search-btn">
            {editingPost ? "Save Changes" : "Add Post"}
          </button>
        </div>
      </div>

      <div className="post-list_wrapper">
        {posts.map(({ id, title, body }) => (
          <div key={id} className="posts bg-postFormBg">
            <Link href={`posts/${id}`} className="post-list">
              <h2>{title}</h2>
              <p>{body}</p>
            </Link>
            <div className="buttons">
              <button
                className="search-btn delete"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
              <button
                className="search-btn edit"
                onClick={() => onEdit({ id, title, body })}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;
