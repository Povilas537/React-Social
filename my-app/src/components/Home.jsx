import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))
            .catch(err => {
                console.error(err);
                setError('Failed to fetch data');
            });
    }, []);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to delete this user?');
        if (confirm) {
            axios.delete(`http://localhost:3000/users/${id}`)
                .then(res => {
                    console.log(res.data);
                    setData(data.filter(user => user.id !== id));
                })
                .catch(err => console.error(err));
        }
    };

    return (
        <div className='d-flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Users</h1>
            <div className='w-80 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-success'>+User</Link>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td className='d-flex'>
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info'>More</Link>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;