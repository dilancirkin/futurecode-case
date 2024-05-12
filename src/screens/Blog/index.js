import React, { Suspense } from "react";
import blogArr from "../../data/blog.json";

function Blog() {
  const BlogCard = React.lazy(() => import("../../components/BlogCard"));

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 p-4 ">
      {blogArr.map((blog, index) => (
        <Suspense key={index}>
          <BlogCard blog={blog} />
        </Suspense>
      ))}
    </div>
  );
}

export default Blog;
