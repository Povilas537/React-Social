import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PostValues } from '../types/types';

const CreatePost = () => {
  const [values, setValues] = useState<PostValues>({
    title: '',
    body: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/posts', values)
      .then((res) => {
        console.log(res.data);
        navigate('/posts');
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="d-flex w-100 vh-100 bg-light">
      <div className="w-50 m-auto border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Create a Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" className="form-control" placeholder="Enter Title" value={values.title} onChange={(e) => setValues({ ...values, title: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="body">Body:</label>
            <textarea name="body" className="form-control" placeholder="Enter Body" value={values.body} onChange={(e) => setValues({ ...values, body: e.target.value })}></textarea>
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/posts" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;