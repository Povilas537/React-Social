import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User } from '../types/types';

const CreateUser = () => {
  const [values, setValues] = useState<User>({
    id: 0,
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form with values:', values);
    axios.post('http://localhost:3000/users', values)
      .then((res) => {
        console.log('User created:', res.data);
        navigate('/');
      })
      .catch((err) => console.error('Error creating user:', err));
  }

  return (
    <div className="d-flex w-100 vh-100 bg-light">
      <div className="w-50 m-auto border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter Phone" value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;