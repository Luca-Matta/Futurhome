import React from 'react';

function Ad({ ad }) {
  return (
    <div className="ad">
      <div className="ad-header">
        <img src={ad.seller.profilePicture} alt="Seller" />
        <p>{ad.seller.username}</p>
        <p>{ad.address}</p>
      </div>
      <div className="ad-pictures">
        {ad.pictures.map((picture, index) => (
          <img key={index} src={picture} alt="Ad" />
        ))}
      </div>
      <div className="ad-buttons">
        <button>Like</button>
        <button>Comment</button>
        <button>Bookmark</button>
        <button>Email</button>
        <button>Calendar</button>
      </div>
      <div className="ad-details">
        <p>Price: {ad.price}</p>
        <p>Size: {ad.size}</p>
        <p>Bathrooms: {ad.bathrooms}</p>
        <p>Bedrooms: {ad.bedrooms}</p>
        <p>Floor: {ad.floor}</p>
        <p>Type: {ad.type}</p>
        <p>Created: {ad.created}</p>
      </div>
    </div>
  );
}

export default Ad;