import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../types/types';

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this post?');
    if (confirm) {
      axios.delete(`http://localhost:3000/posts/${id}`)
        .then((res) => {
          console.log('Deleted post:', res.data);
          setPosts(posts.filter(post => post.id !== id));
        })
        .catch((err) => console.error('Error deleting post:', err));
    }
  };

  return (
    <div className="d-flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Posts</h1>
      <div className="w-80 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/create-post" className="btn btn-success">+Post</Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Link to={`/post/${post.id}`} className="btn btn-sm btn-info me-2">View</Link>
                  <Link to={`/update-post/${post.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button onClick={() => handleDelete(post.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsList;