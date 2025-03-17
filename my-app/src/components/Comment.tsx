import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Comment, User } from '../types/types';

interface CommentProps {
  postId: number;
}

const CommentComponent: React.FC<CommentProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  useEffect(() => {
    axios.get(`http://localhost:3000/comments?postId=${postId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error('Error fetching comments:', err));

    axios.get('http://localhost:3000/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('Error fetching users:', err));
  }, [postId]);

  const handleAddComment = () => {
    const userId = 1; // Replace with the actual user ID
    const comment: Comment = {
      id: comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1,
      postId,
      userId,
      body: newComment
    };

    axios.post('http://localhost:3000/comments', comment)
      .then((res) => {
        setComments([...comments, res.data]);
        setNewComment('');
      })
      .catch((err) => console.error('Error adding comment:', err));
  };

  return (
    <div>
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{users.find(user => user.id === comment.userId)?.name}:</strong> {comment.body}
          </li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentComponent;