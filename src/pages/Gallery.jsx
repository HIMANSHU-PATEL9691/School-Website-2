import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>Campus Gallery</h2>
      <p className="gallery-intro">
        Take a glimpse into life at Smart Vidyalaya — where learning meets creativity, and every corner of the campus tells a story. From vibrant events to hands-on science experiments, our gallery showcases the spirit of our school.
      </p>
      
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/event1.jpg" alt="Annual Function" />
          <p className="caption">🎉 Annual Function – A celebration of talent and teamwork</p>
        </div>
        <div className="gallery-item">
          <img src="/lab.jpg" alt="Science Lab" />
          <p className="caption">🔬 Science Lab – Igniting curiosity through experiments</p>
        </div>
        {/* Add more items as needed */}
      </div>
    </section>
  );
};

export default Gallery;
