import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Values, User } from '../types/types';

const Update = () => {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    phone: ''
  });
  const [data, setData] = useState<User | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Fetching user with id: ${id}`);
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        console.log('User data fetched:', res.data);
        setData(res.data);
        setValues({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone
        });
      })
      .catch((err) => console.error('Error fetching user data:', err));
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating user with values:', values);
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then((res) => {
        console.log('User updated:', res.data);
        navigate('/');
      })
      .catch((err) => console.error('Error updating user:', err));
  }

  return (
    <div className="d-flex w-100 vh-100 bg-light">
      <div className="w-50 m-auto border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Edit User</h1>
        <form onSubmit={handleUpdate}>
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
          <button className="btn btn-success">Edit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  );
};

export default Update;