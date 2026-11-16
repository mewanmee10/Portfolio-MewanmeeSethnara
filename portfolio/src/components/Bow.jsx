import React from 'react';

export default function Bow({ size = 100, color = '#F07868', shadow = '#d45f50' }) {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 160 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(240,120,104,0.3))' }}
    >
      {/* Left ribbon tail */}
      <path
        d="M72 60 C60 72 38 88 22 100"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Right ribbon tail */}
      <path
        d="M88 60 C100 72 122 88 138 100"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Left loop — back layer (darker) */}
      <path
        d="M80 52 C74 36 52 14 28 20 C10 26 14 48 36 54 C52 58 68 56 80 52Z"
        fill={shadow}
        opacity="0.5"
      />
      {/* Left loop — front */}
      <path
        d="M80 52 C72 30 48 10 24 18 C6 24 12 50 38 56 C56 60 70 56 80 52Z"
        fill={color}
        opacity="0.9"
      />
      {/* Left loop sheen */}
      <path
        d="M80 52 C74 38 56 20 36 22 C22 24 18 34 30 42"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />

      {/* Right loop — back layer */}
      <path
        d="M80 52 C86 36 108 14 132 20 C150 26 146 48 124 54 C108 58 92 56 80 52Z"
        fill={shadow}
        opacity="0.5"
      />
      {/* Right loop — front */}
      <path
        d="M80 52 C88 30 112 10 136 18 C154 24 148 50 122 56 C104 60 90 56 80 52Z"
        fill={color}
        opacity="0.9"
      />
      {/* Right loop sheen */}
      <path
        d="M80 52 C86 38 104 20 124 22 C138 24 142 34 130 42"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />

      {/* Centre knot */}
      <ellipse cx="80" cy="52" rx="13" ry="11" fill={shadow} />
      <ellipse cx="80" cy="50" rx="9" ry="7" fill={color} opacity="0.85" />
      <ellipse cx="78" cy="48" rx="4" ry="3" fill="white" opacity="0.25" />
    </svg>
  );
}
