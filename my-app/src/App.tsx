import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UserInfo from './components/UserInfo';
import EditUser from './components/EditUser';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import UpdatePost from './components/EditPost';
import Navbar from './components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/user-info/:id" element={<UserInfo />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostsList />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;