import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => {
                setData(res.data);
                setValues({
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone
                });
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, values)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='d-flex w-100 vh-100 bg-light'>
            <div className='w-50 m-auto border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Edit User</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                        value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email' 
                        value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone'>Phone:</label>
                        <input type='text' name='phone' className='form-control' placeholder='Enter Phone' 
                        value={values.phone} onChange={e => setValues({...values, phone: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Edit</button>
                    <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    );
};

export default Update;