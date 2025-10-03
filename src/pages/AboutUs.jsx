import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>Smart Vidyalaya</h1>
        <p className="tagline">Excellence in Education • INDORE, MP</p>
      </div>

      <div className="about-main">
        {/* Left: Images */}
        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
            alt="Campus"
            className="side-image"
          />
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80"
            alt="Classroom"
            className="side-image"
          />
        
        </div>

        {/* Right: Text Content */}
        <div className="about-content">
          {/* <h2>About Us</h2> */}
          <p>
            Founded in 1995, Smart Vidyalaya has established itself as a pillar of educational excellence in Madhya Pradesh. Over the years, the school has grown from a modest beginning into a dynamic institution known for combining the richness of traditional values with modern teaching methods. Our campus in Kareli serves as a vibrant center of learning where students thrive academically, creatively, and socially.
          </p>

          <p>
            Our mission is rooted in the belief that education is not just about textbooks, but about shaping future leaders with compassion, curiosity, and confidence. We are committed to nurturing young minds with the skills and values they need to navigate a fast-changing world, while staying grounded in integrity and discipline.
          </p>

          <p>
            At Smart Vidyalaya, our vision is to be a benchmark for holistic education. We aim to inspire students to think independently, explore fearlessly, and contribute meaningfully to society. Our classrooms are not just spaces for instruction but arenas for imagination, innovation, and collaboration.
          </p>

          <p>
            Our Principal often says, “Welcome to a journey of learning, growth, and transformation. At Smart Vidyalaya, we believe every child is a spark of potential waiting to shine.” This philosophy echoes throughout the school — in the dedication of our teachers, the enthusiasm of our students, and the trust of our community.
          </p>

          <p>
            The values we uphold — integrity, discipline, compassion, curiosity, and excellence — are at the heart of everything we do. They are not just words but living principles that guide every interaction, decision, and achievement within our school community.
          </p>

          <p>
            Our achievements speak for themselves: consistent 100% board examination results, students excelling in state-level sports, and multiple awards in science exhibitions and academic competitions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
