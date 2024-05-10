import React from "react";
import blogArr from "../../data/blog.json";
import BlogCard from "../../components/BlogCard";
function Blog() {
  return (
    <div className="row" style={{ marginTop: "4%", marginLeft: "2%" }}>
      {blogArr.map((blog) => (
        <div className="col-md-4" style={{ marginBottom: "4%" }}>
          <BlogCard blog={blog}/>
        </div>
      ))}
    </div>
  );
}

export default Blog;
