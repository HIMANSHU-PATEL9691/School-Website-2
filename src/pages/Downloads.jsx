import React, { useEffect, useState } from 'react';

const Downloads = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('downloads')) || [
      {
        name: 'Syllabus.pdf',
        title: 'Academic Syllabus',
        description: 'Detailed syllabus for all classes (Nursery to Class 12)',
        updated: '2025-07-01'
      },
      {
        name: 'AdmissionForm.pdf',
        title: 'Admission Form',
        description: 'Form for new student admissions for the academic year',
        updated: '2025-06-15'
      },
      {
        name: 'HolidayList.pdf',
        title: 'Holiday List',
        description: 'List of school holidays and breaks for the year',
        updated: '2025-01-05'
      },
      {
        name: 'FeeStructure.pdf',
        title: 'Fee Structure',
        description: 'Breakdown of tuition and other fees by class',
        updated: '2025-06-10'
      },
      {
        name: 'ExamSchedule.pdf',
        title: 'Exam Schedule',
        description: 'Timetable for upcoming term exams',
        updated: '2025-08-20'
      },
      {
        name: 'PTMNotice.pdf',
        title: 'PTM Notice',
        description: 'Parent-Teacher Meeting schedule and agenda',
        updated: '2025-08-01'
      }
    ];

    setDownloads(stored);
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>📚 Student Downloads</h2>
      <p style={styles.subtext}>Find important academic and administrative documents below:</p>
      <div style={styles.grid}>
        {downloads.map((file, i) => (
          <div key={i} style={styles.card}>
            <h3>{file.title}</h3>
            <p>{file.description}</p>
            <p><strong>Last Updated:</strong> {file.updated}</p>
            <a
              href={`/downloads/${file.name}`}
              download
              style={styles.button}
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif'
  },
  heading: {
    textAlign: 'center',
    color: '#0078D4',
    marginBottom: '10px'
  },
  subtext: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#555'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  card: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  button: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 16px',
    backgroundColor: '#0078D4',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '500'
  }
};

export default Downloads;
