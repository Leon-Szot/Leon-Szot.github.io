import { useState } from 'react';
import Header from './components/Header';
import Lookbook from './components/Lookbook';
import StudioBio from './components/StudioBio';
import Collections from './components/Collections';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryModal from './components/GalleryModal';
import { collectionsData, Collection } from './constants';
import './App.css';

function App() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Lookbook />
        <StudioBio />
        <Collections 
          collections={collectionsData} 
          onCollectionClick={setSelectedCollection} 
        />
        <Contact />
      </main>

      <Footer />

      {selectedCollection && (
        <GalleryModal 
          collection={selectedCollection} 
          onClose={() => setSelectedCollection(null)} 
        />
      )}
    </div>
  );
}

export default App;
