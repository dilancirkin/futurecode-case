import React from "react";

const BlogComment = ({ comments }) => {
  if (!comments) {
    return null;
  }
  return (
    <div>
      {comments.length !== 0 ? (
        !!comments &&
        comments.map((c, i) => (
          <div class="card mb-2">
            <div class="card-header">Comment</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{c.comment}</p>
                <footer class="blockquote-footer">
                  {" "}
                  <cite title="Source Title">User</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        ))
      ) : (
        <p class="text-md-start mt-2">Be the first to comment on this blog.</p>
      )}
    </div>
  );
};

export default BlogComment;
