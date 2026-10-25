import React from 'react';

export default function TextoError({ texto }) {
  return (
    <div className="text-danger small mt-1">
      {texto}
    </div>
  );
}