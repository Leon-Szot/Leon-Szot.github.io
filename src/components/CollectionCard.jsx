import React from 'react';

const CollectionCard = ({ collection, onClick }) => {
  return (
    <article className="collection-card" onClick={() => onClick(collection)}>
      <div className="card-image-box">
        <img src={collection.cover} alt={collection.name} className="card-img" />
      </div>
      <div className="card-details">
        <span className="card-tag">{collection.tag}</span>
        <h4 className="card-name">{collection.name}</h4>
        <p className="card-desc">{collection.desc}</p>
      </div>
    </article>
  );
};

export default CollectionCard;
