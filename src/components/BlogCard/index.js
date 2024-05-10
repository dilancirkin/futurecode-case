import React from "react";
import { Card,Button} from "react-bootstrap";

function BlogCard({ blog }) {
  return (
    <Card style={{ width: "18rem", height: "65vh" }}>
      <Card.Img style={{ height: "20vh" }} variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text style={{ height: "27vh" }}>{blog.title}</Card.Text>
        <Button variant="primary">Info</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
