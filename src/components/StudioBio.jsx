import React from 'react';

const StudioBio = () => {
  return (
    <section className="studio-bio">
      <h2 className="studio-title">JULKUK</h2>
      <p className="studio-subtitle"> Projektowanie ubrań <span className="slash">/</span> Konstrukcja form <span className="slash">/</span> Kierownictwo Artystyczne </p>
      <p className="studio-desc">
        JULKUK to awangardowe studio modowe skupione wokół dekonstrukcji form, surowej estetyki ulicznej i technologicznych tekstyliów. Tworzymy limitowane serie odzieży łączące bezkompromisowy swag z krawiecką precyzją.
      </p>
      <div className="bio-actions">
        <a href="#contact" className="btn btn-black">Nawiąż współpracę</a>
        <a href="#collections" className="btn btn-outline">Kolekcje</a>
      </div>
    </section>
  );
};

export default StudioBio;
