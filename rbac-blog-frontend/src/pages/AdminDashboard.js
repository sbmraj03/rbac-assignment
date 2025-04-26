import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { toast } from 'react-toastify';


function AdminDashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null); // To know if we are editing

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'admin') {
      toast.error('Access denied: Admins only');
      navigate('/');
    } else {
      fetchPosts();
    }
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const res = await API.get('/blogs');
      setPosts(res.data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await API.put(`/blogs/${editId}`, { title, content });
        toast.success('Post Updated!');
      } else {
        await API.post('/blogs', { title, content });
        toast.success('Blog Post Created!');
      }
      setTitle('');
      setContent('');
      setEditId(null);
      fetchPosts(); // Refresh list
    } catch (error) {
      console.error('Failed to create/update post', error);
      toast.error('Failed to create/update post');
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post._id);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/blogs/${id}`);
      toast.success('Post Deleted!');
      fetchPosts(); // Refresh list
    } catch (error) {
      console.error('Failed to delete post', error);
      toast.error('Failed to delete post');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ margin: '10px', padding: '5px', width: '300px' }}
        />
        <br />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ margin: '10px', padding: '5px', width: '300px', height: '100px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>
          {editId ? 'Update Post' : 'Create Post'}
        </button>
      </form>

      <hr />

      <h3>All Blog Posts</h3>
      {posts.map((post) => (
        <div key={post._id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <button onClick={() => handleEdit(post)} style={{marginRight: '10px'}}>Edit</button>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
