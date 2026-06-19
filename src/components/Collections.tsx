import CollectionCard from './CollectionCard';
import { Collection } from '../constants';

interface CollectionsProps {
  collections: Collection[];
  onCollectionClick: (collection: Collection) => void;
}

const Collections = ({ collections, onCollectionClick }: CollectionsProps) => {
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
