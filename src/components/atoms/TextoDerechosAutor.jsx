import React from 'react';

const TextoDerechosAutor = ({ texto }) => {
  return (
    <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
      {texto}
    </small>
  );
};

export default TextoDerechosAutor;