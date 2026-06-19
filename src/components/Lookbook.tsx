import { useRef } from 'react';

const Lookbook = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'prev' | 'next') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'next' ? 315 : -315;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="lookbook-section">
      <div className="section-header">
        <span className="section-label">LOOKBOOK 2026 // CAPSULE 01</span>
        <div className="slider-nav">
          <button 
            className="nav-btn" 
            onClick={() => scrollSlider('prev')}
            aria-label="Poprzednie zdjęcie"
          >
            &larr;
          </button>
          <button 
            className="nav-btn" 
            onClick={() => scrollSlider('next')}
            aria-label="Następne zdjęcie"
          >
            &rarr;
          </button>
        </div>
      </div>
      
      <div className="slider-viewport" ref={sliderRef}>
        <div className="slider-track">
          <div className="slide-item">
            <img src="/images/braided-hoodie/img1.jpg" alt="Lookbook 01" className="slide-img" />
            <span className="slide-caption">#01</span>
          </div>
          <div className="slide-item">
            <img src="/images/set-1/img1.jpeg" alt="Lookbook 02" className="slide-img" />
            <span className="slide-caption">#02</span>
          </div>
          <div className="slide-item">
            <img src="/images/set-2/img1.jpeg" alt="Lookbook 03" className="slide-img" />
            <span className="slide-caption">#03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
