import React, { useEffect, useState } from 'react';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [todayInfo, setTodayInfo] = useState({});

  useEffect(() => {
    // Load notices from localStorage or default
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [
      'Exam Schedule - Sept 2025',
      'Holiday Notice - Diwali',
      'PTM - Oct 10',
    ];
    setNotices(storedNotices);

    // Get today's info
    const today = new Date();
    const dayName = today.toLocaleDateString('en-IN', { weekday: 'long' });
    const dateStr = today.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

    // Sample festival data (can be fetched from API or expanded)
    const festivalMap = {
      '2025-09-06': 'Ganesh Visarjan',
      '2025-09-08': null,
      '2025-09-10': 'Onam',
      '2025-09-16': 'Eid-e-Milad',
    };

    const dateKey = today.toISOString().split('T')[0];
    const festival = festivalMap[dateKey] || 'No major festival today';
    const isHoliday = dayName === 'Sunday' || festivalMap[dateKey] ? 'Yes' : 'No';

    setTodayInfo({ dateStr, dayName, festival, isHoliday });
  }, []);

  return (
    <section className="notice-board">
      <h2>📢 Notice Board</h2>

      <div className="announcement">
        <h3>Today's Announcement</h3>
        <p><strong>Date:</strong> {todayInfo.dateStr}</p>
        <p><strong>Day:</strong> {todayInfo.dayName}</p>
        <p><strong>Festival:</strong> {todayInfo.festival}</p>
        <p><strong>Holiday:</strong> {todayInfo.isHoliday}</p>
      </div>

      <h3>Upcoming Notices</h3>
      <table className="notice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Notice</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{notice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NoticeBoard;
