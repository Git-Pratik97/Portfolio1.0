import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Introduction', emoji: '👋' },
  { path: '/projects', label: 'Projects', emoji: '💼' },
  { path: '/skills', label: 'Skills', emoji: '🛠️' },
  { path: '/experience', label: 'Experience', emoji: '🚀' },
  { path: '/contact', label: 'Contact', emoji: '📬' }
];

const PortfolioNavbar = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #ffb300 0%, #fffbe7 100%)',
      padding: '1rem 0',
      boxShadow: '0 2px 8px #eee',
      borderRadius: '0 0 18px 18px',
      marginBottom: '2rem'
    }}
  >
    {navItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? '#fff' : '#b26a00',
          background: isActive ? '#b26a00' : 'transparent',
          padding: '0.7rem 1.5rem',
          margin: '0 0.5rem',
          borderRadius: '12px',
          fontWeight: 600,
          fontSize: '1.1em',
          transition: 'all 0.2s',
          boxShadow: isActive ? '0 2px 8px #ffb30055' : 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5em',
          position: 'relative',
        })}
      >
        <span role="img" aria-label={item.label}>{item.emoji}</span>
        {item.label}
        {item.path === '/' && (
          <span
            style={{
              display: 'inline-block',
              transform: 'rotate(-10deg)',
              fontSize: '1em',
              marginLeft: '0.2em'
            }}
          >
            ✨
          </span>
        )}
      </NavLink>
    ))}
  </nav>
);

export default PortfolioNavbar;