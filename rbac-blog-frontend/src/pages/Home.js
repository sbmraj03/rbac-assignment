import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get('/blogs');
        console.log(res.data); // Log the full response data
        setPosts(res.data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title?.name ? post.title.name : 'No Title'}</h3>  {/* Ensure title is a string */}
            <p>{post.content ? post.content : 'No Content'}</p>  {/* Ensure content is a string */}
            <small>Author: {post.author ? post.author : 'Unknown'}</small>  {/* Ensure author is a string */}
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default Home;
