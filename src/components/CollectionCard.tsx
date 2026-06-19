import { Collection } from '../constants';

interface CollectionCardProps {
  collection: Collection;
  onClick: (collection: Collection) => void;
}

const CollectionCard = ({ collection, onClick }: CollectionCardProps) => {
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
