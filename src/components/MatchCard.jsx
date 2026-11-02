import React from 'react';
import ScoreRing from './ScoreRing';
import { CheckIcon, PlusIcon, ArrowRight } from './Icons';
import './MatchCard.css';

export default function MatchCard({
  company = 'Orbit SaaS',
  title = 'UX Designer',
  meta = 'Szeged · Hybrid · Full-time',
  score = 92,
  whyItems = ['Visual design (Transferable)', 'Client collaboration', 'Creative problem-solving'],
  buildItems = ['UX research methods', 'Interactive prototyping'],
  logoType = 'orbit', // 'pixelcraft' | 'apex' | 'orbit'
  isFront = false,
  className = '',
  style,
}) {
  return (
    <div className={`match-card ${isFront ? 'match-card-front' : 'match-card-back'} ${className}`} style={style}>
      {/* Top bar with 3 dots and label */}
      <div className="card-top-bar">
        <div className="top-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <span className="top-label">YOUR TOP MATCH</span>
        <div className="top-spacer" />
      </div>

      {/* Header section */}
      <div className="card-header">
        <div className="company-logo-wrap">
          {logoType === 'pixelcraft' && (
            <div className="company-logo logo-pixelcraft">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="7" height="16" rx="2" fill="#E65100" />
                <path d="M11 4H15C17.76 4 20 6.24 20 9C20 11.76 17.76 14 15 14H11V4Z" fill="#9C27B0" />
                <circle cx="14" cy="9" r="2" fill="#00E5FF" />
              </svg>
            </div>
          )}
          {logoType === 'apex' && (
            <div className="company-logo logo-apex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="12,3 21,19 3,19" fill="#1A2634" />
                <path d="M12 5L19 18H14.5L12 13L9.5 18H5L12 5Z" fill="url(#apex-grad)" />
                <defs>
                  <linearGradient id="apex-grad" x1="5" y1="5" x2="19" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DCF862" />
                    <stop offset="0.5" stopColor="#00E5FF" />
                    <stop offset="1" stopColor="#D500F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
          {logoType === 'orbit' && (
            <div className="company-logo logo-orbit">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-30 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(30 12 12)" />
              </svg>
            </div>
          )}
        </div>

        <div className="header-info">
          <span className="company-name">{company}</span>
          <h3 className="job-title">{title}</h3>
          <span className="job-meta">{meta}</span>
        </div>

        <div className="header-score">
          <ScoreRing score={score} size={isFront ? 68 : 60} strokeWidth={isFront ? 5 : 4.5} />
        </div>
      </div>

      {/* Body panel */}
      <div className="card-body">
        <div className="sub-card sub-card-why">
          <h4 className="sub-title">WHY YOU MATCH</h4>
          <ul className="sub-list">
            {whyItems.map((item, idx) => (
              <li key={idx} className="sub-item">
                <span className="item-icon check-icon-wrap">
                  <CheckIcon size={9} stroke={3} color="#2E7D32" />
                </span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sub-card sub-card-build">
          <h4 className="sub-title">SKILLS TO BUILD</h4>
          <ul className="sub-list">
            {buildItems.map((item, idx) => (
              <li key={idx} className="sub-item">
                <span className="item-icon plus-icon-wrap">
                  <PlusIcon size={9} stroke={2.5} color="#55655D" />
                </span>
                <span className="item-text">{item}</span>
              </li>
            ))}
          </ul>
          <div className="view-full-wrap">
            <span className="view-full-link">
              View full match <ArrowRight size={10} stroke={2.5} color="currentColor" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
