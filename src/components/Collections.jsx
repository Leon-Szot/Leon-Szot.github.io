import React from 'react';
import CollectionCard from './CollectionCard';

const Collections = ({ collections, onCollectionClick }) => {
  return (
    <section className="collections-section" id="collections">
      <h3 className="group-title">KOLEKCJE</h3>
      <div className="collections-grid">
        {collections.map((item) => (
          <CollectionCard 
            key={item.id} 
            collection={item} 
            onClick={onCollectionClick} 
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
