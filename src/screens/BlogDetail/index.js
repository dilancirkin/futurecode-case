import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogArr from "../../data/blog.json";
import BlogComment from "../../components/BlogComment";
import CommentInput from "../../components/CommentInput";

function BlogDetail() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const blog = blogArr.find((blog) => blog.id === id);

  const { initialCommentsData } = blog.comments;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, blog]);

  useEffect(() => {
    if (initialCommentsData != null) {
      setComments(initialCommentsData);
    }
  }, [initialCommentsData]);

  if (!id) {
    return <div>Product ID not provided!</div>;
  }

  if (!blog) {
    return <div>Product not found!</div>;
  }

  function handleAddContent(content) {
    sendContent(content);
  }

  const sendContent = (content) => {
    const contentObject = {
      comment: content,
    };
    setComments([...comments, contentObject]);
  };

  return (
    <section class="py-3 py-md-5 py-xl-8 mt-3">
      <div class="container">
        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div class="col-12 col-lg-6 col-xl-5">
            <img
              class="img-fluid rounded"
              loading="lazy"
              src={blog.featured_image}
              alt=""
            />
          </div>
          <div class="col-12 col-lg-6 col-xl-7">
            <div class="row justify-content-xl-center">
              <div class="col-12 col-xl-11">
                <h2 class="h1 mb-3 text-uppercase text-center">{blog.title}</h2>
                <p class="mb-5">{blog.summary}</p>
                <p class="mb-2 text-sm-end text-info-emphasis fw-bold">
                  Writer:{blog.user.first_name} {blog.user.last_name}
                </p>
                <p class="mb-2 text-sm-end text-info-emphasis fw-bold">
                  Release Date:{blog.created_at}
                </p>
                <p class="mb-2 text-sm-end text-info-emphasis fw-bold">
                  Category:{blog.category}
                </p>
              </div>
            </div>
          </div>
        </div>
        <CommentInput onAdd={handleAddContent} />
        <BlogComment comments={comments} />
      </div>
    </section>
  );
}

export default BlogDetail;
