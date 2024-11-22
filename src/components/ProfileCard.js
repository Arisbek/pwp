import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, imageUrl, description, role }) {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={imageUrl || 'https://via.placeholder.com/150'} alt={name} />
      </div>
      <div className="profile-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;