import * as React from "react";
import { useState, useEffect } from "react";
import { CommentService } from "./services/CommentService";

interface Comment {
  Title: string;
  CommentBody: string;
  CommentAuthor: string;
  CommentDate: Date;
}

const commentService = new CommentService();

const CommentComponent: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  const [loadedComments, setLoadedComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (comments && comments.length > 0) {
      setLoadedComments(comments);
    } else {
      fetchComments();
    }
  }, [comments]);

  const fetchComments = async () => {
    try {
      const allComments = await commentService.getAllComments();
      setLoadedComments(allComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {loadedComments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.CommentAuthor}</strong> - {comment.CommentDate}: {comment.CommentBody}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentComponent;
