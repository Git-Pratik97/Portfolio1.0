import React, { useEffect, useState } from 'react';
import './Introduction.css';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/info.json')
      .then((response) => response.json())
      .then((data) => this.setState({ info: data, loading: false }))
      .catch((error) => this.setState({ error: 'Failed to load introduction.', loading: false }));
  }

  render() {
    const { info, loading, error } = this.state;

    if (loading) return <div>Loading introduction...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;
    if (!info) return null;

    return (
  <div className="intro-container">
    <img
      className="intro-photo"
      src="https://media.licdn.com/dms/image/v2/D4D03AQF5DVr2XShdwQ/profile-displayphoto-shrink_400_400/B4DZVI4Zb8HkAk-/0/1740684499464?e=1758758400&v=beta&t=L_hiuPDRfFxYzMDm3Qe8SzikKnobqB9WLIbqmEDCZ-A"
      alt="Profile"
    />
    <h1 className="intro-name">{info.name || 'Welcome!'}</h1>
    {info.title && <h2 className="intro-title">{info.title}</h2>}
    <p className="intro-summary">{info.summary || info.description}</p>
    {info.highlights && (
      <>
        <h3 className="intro-highlights-title">Highlights:</h3>
        <ul className="intro-highlights-list">
          {info.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);
  }
}

export default Introduction;