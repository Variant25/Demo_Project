import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Popup from './Popup'
import { FaShareAlt, FaPen, FaMapMarkerAlt } from 'react-icons/fa';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [location, setLocation] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  useEffect(() => {
    // fetch posts data from API or database
    const postsData = [
      {
        id: 1,
        type: 'Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        content: 'I\'ve worked in UX for the better part of a decade. From now on, I plan to rei...',
        author: 'Sarthak Kamra',
        views: 1400,
        image: 'https://plus.unsplash.com/premium_photo-1718198501646-a95f049e39b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 2,
        type: 'Education',
        title: 'Tax Benefits for Investment under National Pension',
        content: '',
        author: '',
        views: 0,
        image: 'https://plus.unsplash.com/premium_photo-1718198501646-a95f049e39b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ];
    setPosts(postsData);

    // fetch location data from API or database
    const locationData = {
      city: 'Noida',
      country: 'India'
    };
    setLocation(locationData);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Filter posts based on selected category if needed
  };

  return (
    <>
   <Header/>
  
    <div className="container">
      <div className="header">
        <div className="header-left">
          <ul className="header-nav">
            {['All Posts', 'Article', 'Event', 'Education', 'Job'].map((category) => (
              <li 
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}{category === 'All Posts' && ` (${posts.length})`}
              </li>
            ))}
          </ul>
        </div>
        <div className="header-right">
          <button className="btn-write">Write a Post</button>
          <button className="btn-join">Join Group</button>
        </div>
      </div>
      <div className="main-content">
        <div className="post-container">
          {posts.map((post) => (
            <div className="post-item" key={post.id}>
              <img src={post.image} alt="Post" />
              <div className="post-content">
                <div className="post-header">
                  <span className="post-type">{post.type}</span>
                  <span className="post-title">{post.title}</span>
                  <span className="post-actions">...</span>
                </div>
                <div className="post-body">
                  <p>{post.content || 'No content available.'}</p>
                </div>
                <div className="post-footer">
                  <div className="post-author">
                    <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Author" />
                    <span className="post-author-name">{post.author || 'Unknown Author'}</span>
                  </div>
                  <div className="post-stats">
                    <span className="post-views">{post.views} views</span>
                    <span className="post-share"><FaShareAlt /></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="location-info">
          <span className="location-icon"><FaMapMarkerAlt /></span>
          <span className="location-text">{location.city}, {location.country}</span>
          <span className="location-edit"><FaPen /></span>
          <div className="location-info-desc">Your location will help us serve better and extend a personalized experience.</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
