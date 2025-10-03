import React, { useState, useEffect } from 'react';
import './Admissions.css'; // Optional: or use inline styles

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('online');

  const [onlineForm, setOnlineForm] = useState({ name: '', age: '', class: '', email: '' });
  const [offlineForm, setOfflineForm] = useState({ name: '', age: '', class: '', phone: '' });
  const [scholarshipForm, setScholarshipForm] = useState({ name: '', class: '', marks: '', income: '' });

  const [onlineData, setOnlineData] = useState([]);
  const [offlineData, setOfflineData] = useState([]);
  const [scholarshipData, setScholarshipData] = useState([]);

  // Load stored data
  useEffect(() => {
    setOnlineData(JSON.parse(localStorage.getItem('onlineAdmissions')) || []);
    setOfflineData(JSON.parse(localStorage.getItem('offlineAdmissions')) || []);
    setScholarshipData(JSON.parse(localStorage.getItem('scholarshipApplications')) || []);
  }, []);

  // Submit handlers
  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'online') {
      const updated = [...onlineData, onlineForm];
      localStorage.setItem('onlineAdmissions', JSON.stringify(updated));
      setOnlineData(updated);
      setOnlineForm({ name: '', age: '', class: '', email: '' });
      alert('Online admission submitted!');
    } else if (type === 'offline') {
      const updated = [...offlineData, offlineForm];
      localStorage.setItem('offlineAdmissions', JSON.stringify(updated));
      setOfflineData(updated);
      setOfflineForm({ name: '', age: '', class: '', phone: '' });
      alert('Offline admission submitted!');
    } else if (type === 'scholarship') {
      const updated = [...scholarshipData, scholarshipForm];
      localStorage.setItem('scholarshipApplications', JSON.stringify(updated));
      setScholarshipData(updated);
      setScholarshipForm({ name: '', class: '', marks: '', income: '' });
      alert('Scholarship application submitted!');
    }
  };

  // Render forms or admin view
  const renderTab = () => {
    switch (activeTab) {
      case 'online':
        return (
          <form className="form" onSubmit={(e) => handleSubmit(e, 'online')}>
            <h3>Online Admission Form</h3>
            <input name="name" value={onlineForm.name} onChange={(e) => setOnlineForm({ ...onlineForm, name: e.target.value })} placeholder="Student Name" required />
            <input name="age" type="number" value={onlineForm.age} onChange={(e) => setOnlineForm({ ...onlineForm, age: e.target.value })} placeholder="Age" required />
            <input name="class" value={onlineForm.class} onChange={(e) => setOnlineForm({ ...onlineForm, class: e.target.value })} placeholder="Class" required />
            <input name="email" type="email" value={onlineForm.email} onChange={(e) => setOnlineForm({ ...onlineForm, email: e.target.value })} placeholder="Parent Email" required />
            <button type="submit">Submit</button>
          </form>
        );

      case 'offline':
        return (
          <form className="form" onSubmit={(e) => handleSubmit(e, 'offline')}>
            <h3>Offline Admission Form</h3>
            <input name="name" value={offlineForm.name} onChange={(e) => setOfflineForm({ ...offlineForm, name: e.target.value })} placeholder="Student Name" required />
            <input name="age" type="number" value={offlineForm.age} onChange={(e) => setOfflineForm({ ...offlineForm, age: e.target.value })} placeholder="Age" required />
            <input name="class" value={offlineForm.class} onChange={(e) => setOfflineForm({ ...offlineForm, class: e.target.value })} placeholder="Class" required />
            <input name="phone" value={offlineForm.phone} onChange={(e) => setOfflineForm({ ...offlineForm, phone: e.target.value })} placeholder="Parent Phone Number" required />
            <button type="submit">Submit</button>
          </form>
        );

      case 'scholarship':
        return (
          <form className="form" onSubmit={(e) => handleSubmit(e, 'scholarship')}>
            <h3>Scholarship Application</h3>
            <input name="name" value={scholarshipForm.name} onChange={(e) => setScholarshipForm({ ...scholarshipForm, name: e.target.value })} placeholder="Student Name" required />
            <input name="class" value={scholarshipForm.class} onChange={(e) => setScholarshipForm({ ...scholarshipForm, class: e.target.value })} placeholder="Class" required />
            <input name="marks" type="number" value={scholarshipForm.marks} onChange={(e) => setScholarshipForm({ ...scholarshipForm, marks: e.target.value })} placeholder="Last Exam Marks (%)" required />
            <input name="income" type="number" value={scholarshipForm.income} onChange={(e) => setScholarshipForm({ ...scholarshipForm, income: e.target.value })} placeholder="Family Annual Income" required />
            <button type="submit">Submit</button>
          </form>
        );

      case 'admin':
        return (
          <div className="admin-view">
            <h3>Admin Dashboard</h3>

            <section>
              <h4>Online Admissions</h4>
              <pre>{JSON.stringify(onlineData, null, 2)}</pre>
            </section>

            <section>
              <h4>Offline Admissions</h4>
              <pre>{JSON.stringify(offlineData, null, 2)}</pre>
            </section>

            <section>
              <h4>Scholarship Applications</h4>
              <pre>{JSON.stringify(scholarshipData, null, 2)}</pre>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admissions-container">
      <div className="tabs">
        <button onClick={() => setActiveTab('online')}>Online Admission</button>
        <button onClick={() => setActiveTab('offline')}>Offline Admission</button>
        <button onClick={() => setActiveTab('scholarship')}>Scholarship</button>
        <button onClick={() => setActiveTab('admin')}>Admin View</button>
      </div>

      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default Admissions;
