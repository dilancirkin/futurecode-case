import React from "react";
import { useNavigate } from "react-router-dom";
import "./blogcard.css";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${blog.id}`);
  };

  return (
    <div class="col" onClick={handleClick}>
      <div class="card h-100">
        <img src={blog.featured_image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text">{blog.summary}</p>
          <p class="card-text">{blog.created_at}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
