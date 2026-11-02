import React from 'react';
import { GradCapIcon, SparkleSmallIcon } from './Icons';
import './FloatingBadge.css';

export default function FloatingBadge({
  title,
  subtitle,
  iconType = 'grad', // 'grad' | 'sparkle' | 'dot'
  style,
  className = '',
}) {
  return (
    <div className={`floating-badge ${className}`} style={style}>
      <div className={`badge-icon-tile tile-${iconType}`}>
        {iconType === 'grad' && <GradCapIcon size={16} color="#17332A" />}
        {iconType === 'sparkle' && <SparkleSmallIcon size={14} color="#17332A" />}
        {iconType === 'dot' && (
          <div className="badge-dot-inner" />
        )}
      </div>
      <div className="badge-text-col">
        <span className="badge-title">{title}</span>
        <span className="badge-subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
