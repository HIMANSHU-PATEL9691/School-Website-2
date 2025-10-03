import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiry: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.body.style.background = 'linear-gradient(to right, #f3f9ff, #fff0f5)';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactSubmission', JSON.stringify(formData));
    alert('✅ Inquiry submitted! We’ll get back to you soon.');
    setFormData({ name: '', phone: '', inquiry: '' });
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>📬 Contact Smart Vidyalaya</h1>

      <div style={styles.flexContainer}>
        {/* Left: Info */}
        <div style={styles.info}>
          <h2>🏫 School Information</h2>
          <p><strong>📍 Address:</strong> Excellence Road, Indore, Madhya Pradesh</p>
          <p><strong>📞 Phone:</strong> +91-9876543210</p>
          <p><strong>📧 Email:</strong> info@smartvidyalaya.in</p>
        </div>

        {/* Right: Form */}
        <div style={styles.form}>
          <h2>📝 Inquiry Form</h2>
          <form onSubmit={handleSubmit} style={styles.formFields}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              style={styles.input}
            />
            <textarea
              name="inquiry"
              placeholder="Your Inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>

      {/* Bottom: Full-width Map */}
      <div style={styles.mapContainer}>
  <h2 style={styles.mapHeading}>📍 Find Us Here</h2>
  <iframe
    title="Smart Vidyalaya Indore Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.379785338948!2d75.857726!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcadf6e1f3f1%3A0x9f8e8f2e3e8f3f3f!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000"
    width="100%"
    height="450"  // Increased from 300 to 450
    style={styles.map}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
};

const styles = {
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    minHeight: '100vh',
    boxSizing: 'border-box'
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    color: '#0078D4',
    marginBottom: '40px',
    animation: 'fadeIn 1s ease-in-out'
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    marginBottom: '40px'
  },
  info: {
    flex: '1 1 45%',
    color: '#333',
    lineHeight: '1.8',
    animation: 'slideLeft 1s ease-in-out'
  },
  form: {
    flex: '1 1 45%',
    animation: 'slideRight 1s ease-in-out'
  },
  formFields: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '14px 16px',
    fontSize: '17px',
    borderRadius: '10px',
    border: '1px solid #bbb',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    outline: 'none'
  },
  textarea: {
    padding: '14px 16px',
    fontSize: '17px',
    borderRadius: '10px',
    border: '1px solid #bbb',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    minHeight: '140px',
    resize: 'vertical',
    transition: 'all 0.3s ease',
    outline: 'none'
  },
  button: {
    padding: '16px',
    fontSize: '17px',
    backgroundColor: '#0078D4',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'background 0.3s ease, transform 0.2s ease',
    fontWeight: '600'
  },
  mapContainer: {
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    animation: 'fadeIn 1s ease-in-out'
  },
  map: {
    border: '0',
    width: '100vw',
    height: '450px'
  },
  mapHeading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '12px',
    color: '#0078D4',
    fontWeight: '600',
    animation: 'fadeIn 1s ease-in-out'
  }
};

// Add animations globally
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes slideRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}`, styleSheet.cssRules.length);
styleSheet.insertRule(`
button:hover {
  background-color: #005fa3;
  transform: scale(1.02);
}
`, styleSheet.cssRules.length);

export default ContactUs;
