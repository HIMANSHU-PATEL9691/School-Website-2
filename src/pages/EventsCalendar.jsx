import React, { useEffect, useMemo, useState } from 'react';

const LS_KEY = 'events';

const defaultEvents = [
  {
    id: crypto.randomUUID(),
    name: 'Hindi Diwas',
    date: '2025-09-15',
    type: 'Cultural',
    description: 'Celebration of Hindi language with performances and speeches.',
  },
  {
    id: crypto.randomUUID(),
    name: 'PTM',
    date: '2025-10-10',
    type: 'Academic',
    description: 'Parent-Teacher Meeting to discuss student progress.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Annual Function',
    date: '2025-11-25',
    type: 'Ceremony',
    description: 'Annual celebration with awards and cultural programs.',
  },
];

/**
 * Migrates legacy data:
 * - If stored as strings like "Hindi Diwas - Sept 15", convert to objects.
 * - If already objects, keep as is.
 */
function migrateEvents(raw) {
  if (!Array.isArray(raw)) return defaultEvents;

  // If already object-shaped
  if (raw.length && typeof raw[0] === 'object') {
    // Ensure IDs exist
    return raw.map(ev => ({
      id: ev.id || crypto.randomUUID(),
      name: ev.name || 'Untitled Event',
      date: ev.date || new Date().toISOString().slice(0, 10),
      type: ev.type || 'General',
      description: ev.description || '',
    }));
  }

  // If strings -> best-effort parse "Name - Mon dd" to ISO
  const tryParse = (s) => {
    const [namePart, datePart] = String(s).split(' - ').map(x => x?.trim());
    const name = namePart || 'Untitled Event';
    let iso = null;

    if (datePart) {
      // Try to parse with current year
      const year = new Date().getFullYear();
      // Handle variants like "Sept 15", "Sep 15", "Oct 10, 2025"
      const normalized = datePart.replace('Sept', 'Sep');
      const parsed = new Date(`${normalized} ${year}`);
      if (!isNaN(parsed.getTime())) {
        iso = parsed.toISOString().slice(0, 10);
      }
    }

    return {
      id: crypto.randomUUID(),
      name,
      date: iso || new Date().toISOString().slice(0, 10),
      type: 'General',
      description: '',
    };
  };

  const migrated = raw.map(tryParse);
  return migrated.length ? migrated : defaultEvents;
}

const EventsCalendar = () => {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date'); // 'date' | 'name'
  const [editing, setEditing] = useState(null); // event or null
  const [form, setForm] = useState({
    name: '',
    date: '',
    type: 'General',
    description: '',
  });

  // Load + migrate on mount
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(LS_KEY));
      const migrated = migrateEvents(stored);
      setEvents(migrated);
    } catch {
      setEvents(defaultEvents);
    }
  }, []);

  // Persist on change
  useEffect(() => {
    if (events.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(events));
    }
  }, [events]);

  const resetForm = () => {
    setForm({ name: '', date: '', type: 'General', description: '' });
    setEditing(null);
  };

  const startEdit = (ev) => {
    setEditing(ev.id);
    setForm({
      name: ev.name,
      date: ev.date,
      type: ev.type || 'General',
      description: ev.description || '',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.date) return;

    if (editing) {
      setEvents(prev =>
        prev.map(ev =>
          ev.id === editing ? { ...ev, ...form } : ev
        )
      );
    } else {
      setEvents(prev => [
        ...prev,
        { id: crypto.randomUUID(), ...form },
      ]);
    }
    resetForm();
  };

  const remove = (id) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
    if (editing === id) resetForm();
  };

  const filteredSorted = useMemo(() => {
    const q = query.toLowerCase();
    let list = events.filter(ev => {
      const matchesQ =
        ev.name.toLowerCase().includes(q) ||
        ev.description.toLowerCase().includes(q) ||
        ev.type.toLowerCase().includes(q);
      const matchesType =
        typeFilter === 'All' ? true : ev.type === typeFilter;
      return matchesQ && matchesType;
    });

    if (sortBy === 'date') {
      list.sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));
    } else if (sortBy === 'name') {
      list.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      );
    }
    return list;
  }, [events, query, typeFilter, sortBy]);

  const uniqueTypes = useMemo(() => {
    const set = new Set(events.map(e => e.type || 'General'));
    return ['All', ...Array.from(set)];
  }, [events]);

  return (
    <section className="events-calendar">
      <h2>📅 School Events Calendar</h2>

      <div className="ec-controls">
        <div className="ec-search">
          <input
            type="text"
            placeholder="Search by name, type, or description..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search events"
          />
        </div>
        <div className="ec-filters">
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} aria-label="Filter by type">
            {uniqueTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} aria-label="Sort by">
            <option value="date">Sort by date</option>
            <option value="name">Sort by name</option>
          </select>
        </div>
      </div>

      <form className="ec-form" onSubmit={onSubmit}>
        <h3>{editing ? 'Edit Event' : 'Add Event'}</h3>
        <div className="ec-grid">
          <label>
            <span>Event name</span>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>
          <label>
            <span>Date</span>
            <input
              type="date"
              value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
              required
            />
          </label>
          <label>
            <span>Type</span>
            <select
              value={form.type}
              onChange={e => setForm({ ...form, type: e.target.value })}
            >
              <option>General</option>
              <option>Academic</option>
              <option>Cultural</option>
              <option>Sports</option>
              <option>Ceremony</option>
              <option>Holiday</option>
            </select>
          </label>
          <label className="ec-col-span">
            <span>Description</span>
            <input
              type="text"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              placeholder="Optional details"
            />
          </label>
        </div>
        <div className="ec-actions">
          <button type="submit">{editing ? 'Update' : 'Add'}</button>
          {editing && (
            <button type="button" className="secondary" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <table className="events-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Event name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th aria-label="Actions"></th>
          </tr>
        </thead>
        <tbody>
          {filteredSorted.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.name}</td>
              <td>
                {new Date(event.date).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td>
                <span className={`ec-chip type-${(event.type || 'General').toLowerCase()}`}>
                  {event.type || 'General'}
                </span>
              </td>
              <td className="ec-desc">{event.description}</td>
              <td className="ec-row-actions">
                <button onClick={() => startEdit(event)}>Edit</button>
                <button className="danger" onClick={() => remove(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredSorted.length === 0 && (
            <tr>
              <td colSpan="6" className="ec-empty">No events found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default EventsCalendar;
