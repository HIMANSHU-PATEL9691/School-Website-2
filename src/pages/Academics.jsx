import React, { useEffect, useState } from "react";
import "./Academics.css";

/* ------------ Defaults & helpers ------------ */
const DEFAULT_SUBJECTS = {
   online: [
    {
      name: "Web Development Bootcamp",
      grade: "Undergraduate",
      stream: "Computer Science",
      duration: "3 Months",
      teacher: "Dr. Smith",
      email: "smith@university.com",
      schedule: "Mon & Wed - 6PM to 8PM",
      contactTime: "6:00 PM - 8:00 PM",
      whatsapp: "9876543210",
      status: "Active",
    },
    {
      name: "Data Science with Python",
      grade: "Postgraduate",
      stream: "Data Science",
      duration: "4 Months",
      teacher: "Prof. Johnson",
      email: "johnson@university.com",
      schedule: "Tue & Thu - 7PM to 9PM",
      contactTime: "7:00 PM - 9:00 PM",
      whatsapp: "9998887777",
      status: "Active",
    },
  ],
  offline: [
    {
      name: "Mathematics - Algebra",
      grade: "Class 10",
      stream: "Mathematics",
      duration: "1 Year",
      teacher: "Mrs. Allen",
      email: "allen@school.com",
      schedule: "Mon to Fri - 10AM to 11AM",
      contactTime: "10:00 AM - 11:00 AM",
      whatsapp: "9123456780",
      status: "Active",
    },
    {
      name: "Physics - Mechanics",
      grade: "Class 12",
      stream: "Science",
      duration: "1 Year",
      teacher: "Mr. Lee",
      email: "lee@school.com",
      schedule: "Mon to Fri - 12PM to 1PM",
      contactTime: "12:00 PM - 1:00 PM",
      whatsapp: "9191919191",
      status: "Inactive",
    },
  ],
};

function migrateStored(rawParsed) {
  if (!rawParsed) return DEFAULT_SUBJECTS;
  if (Array.isArray(rawParsed)) {
    // Old array shape -> put into offline
    const offline = rawParsed.map((s) => ({
      name: s.name || s.subject || "Untitled",
      grade: s.grade || "",
      stream: s.stream || s.department || "",
      duration: s.duration || "",
      teacher: s.teacher || "",
      email: s.email || "",
      schedule: s.schedule || "",
      contactTime: s.contactTime || "",
      whatsapp: (s.whatsapp || s.contact || "").toString().replace(/\D/g, ""),
      status: s.status === "Inactive" ? "Inactive" : "Active",
    }));
    return { online: [], offline };
  }
  // If already an object with online/offline but missing keys, normalize:
  return {
    online: Array.isArray(rawParsed.online) ? rawParsed.online : [],
    offline: Array.isArray(rawParsed.offline) ? rawParsed.offline : [],
  };
}

function sanitizePhone(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (!digits) return "";
  return digits.startsWith("91") ? digits : "91" + digits;
}

/* ---------------- Component ---------------- */
export default function Academics() {
  const [subjects, setSubjects] = useState({ online: [], offline: [] });
  const [activeTab, setActiveTab] = useState("online","offline");
  const [showForm, setShowForm] = useState(false);
  const [courseType, setCourseType] = useState("online","offline");
  const [newSubject, setNewSubject] = useState({
    name: "",
    grade: "",
    stream: "",
    duration: "",
    teacher: "",
    email: "",
    schedule: "",
    contactTime: "",
    whatsapp: "",
    status: "Active",
  });

  // load + migrate localStorage safely
  useEffect(() => {
    try {
      const raw = localStorage.getItem("subjects");
      const parsed = raw ? JSON.parse(raw) : null;
      const normalized = migrateStored(parsed);
      setSubjects(normalized);
      // if nothing in storage, write the defaults
      if (!raw) localStorage.setItem("subjects", JSON.stringify(normalized));
    } catch (err) {
      console.error("Failed to parse 'subjects' from localStorage, clearing it and using defaults.", err);
      localStorage.removeItem("subjects");
      localStorage.setItem("subjects", JSON.stringify(DEFAULT_SUBJECTS));
      setSubjects(DEFAULT_SUBJECTS);
    }
  }, []);

  const saveSubjects = (data) => {
    localStorage.setItem("subjects", JSON.stringify(data));
    setSubjects(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectToSave = { ...newSubject, whatsapp: sanitizePhone(newSubject.whatsapp) };
    const updated = {
      ...subjects,
      [courseType]: [...(subjects[courseType] || []), subjectToSave],
    };
    saveSubjects(updated);
    setShowForm(false);
    setNewSubject({
      name: "",
      grade: "",
      stream: "",
      duration: "",
      teacher: "",
      email: "",
      schedule: "",
      contactTime: "",
      whatsapp: "",
      status: "Active",
    });
  };

  const openWhatsApp = (phone, teacher, subjectName) => {
    const num = sanitizePhone(phone);
    if (!num) {
      alert("No valid WhatsApp number provided for this teacher.");
      return;
    }
    const text = `Hello ${teacher || ""}, I have a query regarding ${subjectName || ""}.`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const renderCard = (s, idx) => (
    <div className="subject-card" key={idx}>
      <div className="card-head">
        <div>
          <h3 className="subject-title">{s.name}</h3>
          <div className="muted">Grade: {s.grade || "—"} • {s.stream || "—"}</div>
        </div>
        <div className={`status ${s.status === "Active" ? "active" : "inactive"}`}>
          {s.status}
        </div>
      </div>

      <div className="card-body">
        <p><strong>Duration:</strong> {s.duration || "—"}</p>
        <p><strong>Teacher:</strong> {s.teacher || "—"}</p>
        <p><strong>Schedule:</strong> {s.schedule || "—"}</p>
        <p><strong>Contact Time:</strong> {s.contactTime || "—"}</p>
      </div>

      <div className="card-actions">
        <button
          className="contact-btn"
          onClick={() => openWhatsApp(s.whatsapp, s.teacher, s.name)}
        >
          💬 WhatsApp
        </button>
      </div>
    </div>
  );

  return (
    <div className="academics-container">
      <header className="header">
        <div>
          <h1>Academic Courses</h1>
          <p className="subtitle">Online and Offline courses — pick what you need</p>
        </div>

        <div className="controls">
          <div className="tabs">
            <button className={activeTab === "online" ? "tab active" : "tab"} onClick={() => setActiveTab("online")}>Online</button>
            <button className={activeTab === "offline" ? "tab active" : "tab"} onClick={() => setActiveTab("offline")}>Offline</button>
          </div>
          <button className="add-btn" onClick={() => { setCourseType("online"); setShowForm(true); }}>➕ Add Course</button>
        </div>
      </header>

      <section className="summary">
        <div>Online: <strong>{subjects.online?.length ?? 0}</strong></div>
        <div>Offline: <strong>{subjects.offline?.length ?? 0}</strong></div>
      </section>

      <section className="course-section">
        <h2 className="section-title">{activeTab === "online" ? "🌐 Online Courses" : "🏫 Offline Courses"}</h2>

        <div className="subject-grid">
          {(subjects[activeTab] && subjects[activeTab].length > 0)
            ? subjects[activeTab].map(renderCard)
            : <div className="empty">No {activeTab} courses available.</div>}
        </div>
      </section>

      {showForm && (
        <div className="form-overlay" onMouseDown={(e) => { if (e.target.classList.contains('form-overlay')) setShowForm(false); }}>
          <div className="form-container" onMouseDown={(e) => e.stopPropagation()}>
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit}>
              <label className="label-row">
                <span>Course Type</span>
                <select value={courseType} onChange={(e) => setCourseType(e.target.value)}>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </label>

              <label className="label-row">
                <span>Subject Name *</span>
                <input required value={newSubject.name} onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })} />
              </label>

              <label className="label-row">
                <span>Grade</span>
                <input value={newSubject.grade} onChange={(e) => setNewSubject({ ...newSubject, grade: e.target.value })} />
              </label>

              <label className="label-row">
                <span>Stream</span>
                <input value={newSubject.stream} onChange={(e) => setNewSubject({ ...newSubject, stream: e.target.value })} />
              </label>

              <label className="label-row">
                <span>Duration</span>
                <input value={newSubject.duration} onChange={(e) => setNewSubject({ ...newSubject, duration: e.target.value })} placeholder="e.g., 6 Months" />
              </label>

              <label className="label-row">
                <span>Teacher</span>
                <input value={newSubject.teacher} onChange={(e) => setNewSubject({ ...newSubject, teacher: e.target.value })} />
              </label>

              <label className="label-row">
                <span>Schedule</span>
                <input value={newSubject.schedule} onChange={(e) => setNewSubject({ ...newSubject, schedule: e.target.value })} placeholder="e.g., Mon & Wed - 7PM" />
              </label>

              <label className="label-row">
                <span>Contact Time</span>
                <input value={newSubject.contactTime} onChange={(e) => setNewSubject({ ...newSubject, contactTime: e.target.value })} />
              </label>

              <label className="label-row">
                <span>WhatsApp</span>
                <input value={newSubject.whatsapp} onChange={(e) => setNewSubject({ ...newSubject, whatsapp: e.target.value })} placeholder="0123456789 or +911234567890" />
              </label>

              <label className="label-row">
                <span>Status</span>
                <select value={newSubject.status} onChange={(e) => setNewSubject({ ...newSubject, status: e.target.value })}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </label>

              <div className="form-actions">
                <button type="button" className="btn cancel" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn save">Save Course</button>
              </div>
            </form>
            <p className="note">Tip: WhatsApp numbers will be sanitized and prefixed with country code 91 if missing.</p>
          </div>
        </div>
      )}
    </div>
  );
}
