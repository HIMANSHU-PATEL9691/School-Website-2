import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&auto=format&fit=crop&q=80"
          alt="School Campus"
          className="hero-img"
        />
        <div className="hero-overlay">
          <h1>Smart Vidyalaya</h1>
          <p>Excellence in Education • Kareli, MP</p>
          <a href="#admissions" className="cta-button">Apply Now</a>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section bg-light-gray quick-info">
        <h2>School at a Glance</h2>
        <div className="info-grid">
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" loading="lazy" />
            <p><strong>Location:</strong> Kareli, MP</p>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991112.png" alt="Grades" loading="lazy" />
            <p><strong>Classes:</strong> Nursery to 10th</p>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" loading="lazy" />
            <p><strong>Contact:</strong> 07692-XXXXXX</p>
          </div>
          <div className="info-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="Hours" loading="lazy" />
            <p><strong>Hours:</strong> Mon–Sat, 8 AM–2 PM</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white about">
        <div className="section-content">
          <div className="section-text">
            <h2>About Us</h2>
            <p>Founded in 1998, Smart Vidyalaya is a beacon of holistic education. We blend tradition with innovation to shape confident, responsible, and curious learners for the modern world.</p>
            <ul>
              <li>✅ CBSE Affiliated</li>
              <li>✅ 1000+ Students</li>
              <li>✅ Student–Teacher Ratio: 25:1</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600053273044-9443e8d7f470?w=800&auto=format&fit=crop&q=80"
            alt="About School"
            className="section-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* Vision Section with Background Image */}
      <section className="section bg-image bg-vision vision">
        <div className="section-content">
          <div className="section-text">
            <h2>Our Vision</h2>
            <p>To empower every student with knowledge, skills, and values that prepare them for life beyond school — as global thinkers and compassionate leaders.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-blue-light why-study">
        <div className="section-content">
          <div className="section-text">
            <h2>Why Choose Smart Vidyalaya?</h2>
            <ul>
              <li>✅ Experienced, caring faculty</li>
              <li>✅ Smart classrooms and digital learning</li>
              <li>✅ Strong academics and sports culture</li>
              <li>✅ Safe and inclusive campus</li>
              <li>✅ Focus on creativity and leadership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="section bg-light-gray admissions" id="admissions">
        <div className="section-content reverse">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=80"
            alt="Admissions"
            className="section-img"
            loading="lazy"
          />
          <div className="section-text">
            <h2>Admissions Open</h2>
            <p>We're accepting admissions for Nursery to Class 10. Forms are available both online and in-person. Don’t miss the chance to become part of the Smart Vidyalaya family.</p>
            <p><strong>Deadline:</strong> September 30</p>
            <a href="/admissions" className="cta-button small">Apply Online</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light-gray testimonials">
        <h2>What Parents Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Parent" loading="lazy" />
            <p>"Smart Vidyalaya has given my daughter more than education — it's given her confidence and values."</p>
            <strong>- Meera Joshi</strong>
          </div>
          <div className="testimonial">
            <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Parent" loading="lazy" />
            <p>"Great teachers, wonderful environment. Highly recommend this school."</p>
            <strong>- Ramesh Verma</strong>
          </div>
        </div>
      </section>

      {/* Events / News */}
      <section className="section bg-white news-events">
        <h2>News & Events</h2>
        
        <div className="events-list">
          <div className="event-item">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80" alt="Science Exhibition" loading="lazy" />
            <p><strong>Science Exhibition</strong> – Sept 20</p>
          </div>
          <div className="event-item">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80" alt="Sports Day" loading="lazy" />
            <p><strong>Annual Sports Day</strong> – Sept 12</p>
          </div>
          <div className="event-item">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80" alt="Mid-Term Exams" loading="lazy" />
            <p><strong>Mid-Term Exams</strong> – Oct 20</p>
          </div>
        </div>
      </section>

      {/* Explore Campus */}
      <section className="section bg-image bg-explore explore">
        <div className="section-content">
          <div className="section-text">
            <h2>Explore Our Campus</h2>
            
            <p>From smart classrooms to a serene library, our vibrant campus inspires learning, discovery, and creativity. Take a virtual tour today!</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
