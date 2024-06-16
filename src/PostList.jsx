import React from 'react';
import Post from './Post';


const PostList = () => {
  const posts = [
    {
      id: 1,
      category: 'Article',
      title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
      description: 'I\'ve worked in UX for the better part of a decade. From now on, I plan to rei...',
      author: 'Sarthak Kamra',
      views: '1.4k views',
      imageUrl: 'https://example.com/path/to/forest-image.jpg', // Replace with the actual image URL
    },
    {
      id: 2,
      category: 'Education',
      title: 'Tax Benefits for Investment under National Pension',
      imageUrl: 'https://example.com/path/to/peeling-paint-image.jpg', // Replace with the actual image URL
    }
  ];

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
