import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Post } from '../types/types';

const PostDetail = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(`Fetching post with id: ${id}`); // Log the id
    axios.get(`http://localhost:3000/posts?id=${id}`)
      .then((res) => {
        console.log('Post data fetched:', res.data); // Log the response data
        setPost(res.data);
      })
      .catch((err) => console.error('Error fetching post data:', err));
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Post Detail</h3>
        {post ? (
          <>
            <div className="mb-2">
              <strong>Title: {post.title}</strong>
            </div>
            <div className="mb-3">
              <p>{post.body}</p>
            </div>
            <Link to="/posts" className="btn btn-primary">Back</Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PostDetail;