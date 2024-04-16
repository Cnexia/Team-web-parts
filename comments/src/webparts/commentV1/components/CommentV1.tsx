import * as React from 'react';
import { TextField, DefaultButton, Stack } from '@fluentui/react';
import CommentService, { IComment } from './services/CommentService';

export interface ICommentV1Props {
  description: string;
}

export interface ICommentV1State {
  newComment: string;
  comments: IComment[];
}

export default class CommentV1 extends React.Component<{}, ICommentV1State> {
  private commentService: CommentService;

  constructor(props: {}) {
    super(props);
    this.state = {
      newComment: '',
      comments: [],
    };
    this.commentService = new CommentService();
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      const comments = await this.commentService.getComments();
      this.setState({ comments });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = async () => {
    const { newComment } = this.state;
    if (!newComment) return; 

    try {
      await this.commentService.postComment(newComment);
      this.fetchComments();
      this.setState({ newComment: '' });
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  render() {
    const { newComment, comments } = this.state;
    return (
      <Stack>
        <TextField
          label="Add a comment"
          value={newComment}
          onChange={this.handleCommentChange}
        />
        <DefaultButton text="Submit" onClick={this.handleSubmit} />
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.User}:</strong> {comment.comment} ({comment.date.toLocaleString()})
            </li>
          ))}
        </ul>
      </Stack>
    );
  }
}
