import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import { User, Post } from '../types/types';

const Read = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));

    // Fetch posts for the user
    axios.get(`http://localhost:3000/posts?userId=${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        {user ? (
          <>
            <div className="mb-2">
              <strong>Name: {user.name}</strong>
            </div>
            <div className="mb-2">
              <strong>Email: {user.email}</strong>
            </div>
            <div className="mb-3">
              <strong>Phone: {user.phone}</strong>
            </div>
            <h4>Posts by this User:</h4>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <strong>Title: {post.title}</strong><br />
                  <span>{post.body}</span>
                </li>
              ))}
            </ul>
            <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
            <Link to="/" className="btn btn-primary ms-3">Back</Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Read;