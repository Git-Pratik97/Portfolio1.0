import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/info.json')
      .then((response) => response.json())
      .then((data) => setInfo(data.contact || data))
      .catch(() => setInfo(null));
  }, []);

  if (!info) return <div className="contact-container">Loading contact info...</div>;

  return (
    <div className="contact-container">
      <h2 className="contact-title">
        <span role="img" aria-label="wave">👋</span> Contact Me
      </h2>
      <div className="contact-card">
        <div className="contact-avatar">
          <img
            src={info.photo || process.env.PUBLIC_URL + '/contact_profile.jpg'}
            alt="Profile"
            className="contact-photo"
          />
        </div>
        <div className="contact-details">
          {info.email && (
            <div className="contact-row">
              <span className="contact-label">📧 Email:</span>
              <a className="contact-link" href={`mailto:${info.email}`}>{info.email}</a>
            </div>
          )}
          {info.phone && (
            <div className="contact-row">
              <span className="contact-label">📱 Phone:</span>
              <span className="contact-value">{info.phone}</span>
            </div>
          )}
          {info.linkedin && (
  <div className="contact-row">
    <span className="contact-label">💼 LinkedIn:</span>
    <a
      className="contact-link"
      href={info.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      {info.linkedin.replace('https://www.linkedin.com/in/', '').replace(/\/$/, '')}
    </a>
  </div>
)}
          {info.github && (
  <div className="contact-row">
    <span className="contact-label">🐙 GitHub:</span>
    <a
      className="contact-link"
      href={info.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      {info.github.replace('https://github.com/', '')}
    </a>
  </div>
)}
          {info.address && (
            <div className="contact-row">
              <span className="contact-label">🏠 Address:</span>
              <span className="contact-value">{info.address}</span>
            </div>
          )}
        </div>
      </div>
      <div className="contact-footer">
        <span role="img" aria-label="sparkles">✨</span>
        <span>Let's connect and create something amazing together!</span>
        <span role="img" aria-label="rocket">🚀</span>
      </div>
    </div>
  );
};

export default Contact;