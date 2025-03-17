import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';
import UpdatePost from './components/UpdatePost';
import Navbar from './components/Navbar'; // Import Navbar
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostsList />} />
        <Route path="/create-post" element={<CreatePost />} />
        {/* <Route path="/post/:id" element={<PostDetail />} /> */}
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;