// src/pages/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();
  return <h3>Viewing Blog Post with ID: {postId}</h3>;
};

export default BlogPost;
