import React from 'react';


const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt={post.title} className="post-image" />
      <div className="post-content">
        <span className="post-category">{post.category}</span>
        <h2 className="post-title">{post.title}</h2>
        {post.description && <p className="post-description">{post.description}</p>}
        <div className="post-meta">
          <span className="post-author">{post.author}</span>
          <span className="post-views">{post.views}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
