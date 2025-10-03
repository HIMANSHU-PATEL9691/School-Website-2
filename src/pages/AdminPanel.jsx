import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [events, setEvents] = useState('');
  const [downloads, setDownloads] = useState('');
  const [admissions, setAdmissions] = useState('');
  const [subjects, setSubjects] = useState('');
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';
    document.body.style.background = 'linear-gradient(to right, #f3f9ff, #fff0f5)';

    const stored = {
      events: JSON.parse(localStorage.getItem('events') || '[]'),
      downloads: JSON.parse(localStorage.getItem('downloads') || '[]'),
      admissions: JSON.parse(localStorage.getItem('admissions') || '[]'),
      subjects: JSON.parse(localStorage.getItem('subjects') || '[]')
    };
    setSavedData(stored);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Smart@2025') {
      navigate('/home'); // 🔁 Redirect to /home
    } else {
      alert('❌ Invalid credentials');
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      events: events.split(',').map(e => e.trim()),
      downloads: downloads.split(',').map(d => d.trim()),
      admissions: admissions.split(',').map(a => a.trim()),
      subjects: subjects.split(',').map(s => s.trim())
    };

    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    setSavedData(data);
    alert('✅ Data saved successfully!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🛠 Admin Panel</h1>

      <form onSubmit={handleLogin} style={styles.loginBox}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            placeholder="Try 'admin'"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <small style={styles.hint}>Hint: Default username is <strong>admin</strong></small>
        </label>

        <label style={styles.label}>
          Password:
          <input
            type="password"
            placeholder="Try 'Smart@2025'"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <small style={styles.hint}>Hint: Default password is <strong>Smart@2025</strong></small>
        </label>

        <button type="submit" style={styles.button}>🔐 Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px 20px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    color: '#0078D4',
    marginBottom: '30px'
  },
  loginBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '500',
    color: '#444'
  },
  hint: {
    fontSize: '13px',
    color: '#888',
    marginTop: '4px'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    outline: 'none'
  },
  button: {
    padding: '14px',
    fontSize: '16px',
    backgroundColor: '#0078D4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600'
  }
};

export default AdminPanel;
