import React from 'react';
import './BlogCard.css';

function BlogCard({ title, description, imageUrl, date, author, url }) {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={imageUrl || 'https://via.placeholder.com/300x200'} alt={title} />
      </div>
      <div className="blog-content">
        <h3>{title}</h3>
        <div className="blog-meta">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
        <p>{description}</p>
        <button className="read-more"><a href={url}>Read More</a></button>
      </div>
    </div>
  );
}

export default BlogCard;