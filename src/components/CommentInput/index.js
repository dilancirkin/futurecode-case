import React, { useState } from "react";

function CommentInput({ onAdd }) {
  const [text, setText] = useState(""); 

  function handleChange(event) {
    setText(event.target.value); 
  }
  function handleAdd() {
    if (!text) {
      return;
    }
    onAdd(text);
    setText("");
  }

  return (
    <div>
      <div class="mt-3">
        <label class="form-label text-danger-emphasis fw-bold mt-2">
          Share your thoughts with us!
        </label>
        <textarea
          class="form-control"
          rows="3"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <div class="d-grid  d-md-flex justify-content-md-end">
        <button
          type="button"
          class="btn btn-outline-dark mb-4"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CommentInput;
