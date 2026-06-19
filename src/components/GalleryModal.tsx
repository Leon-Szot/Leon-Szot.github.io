import { useEffect } from 'react';
import { Collection } from '../constants';

interface GalleryModalProps {
  collection: Collection;
  onClose: () => void;
}

const GalleryModal = ({ collection, onClose }: GalleryModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!collection) return null;

  return (
    <div className="gallery-modal active">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h4 className="modal-title">{collection.name}</h4>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-images-container">
          {collection.images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`${collection.name} ${index + 1}`} 
              className="modal-img" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
