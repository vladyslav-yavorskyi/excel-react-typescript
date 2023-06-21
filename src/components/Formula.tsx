import React from 'react';

function Formula() {
  return (
    <div className="flex">
      <span>f(x)</span>
      <input
        className="border-solid border-2 border-gray-300 rounded"
        type="text"
      />
    </div>
  );
}

export default Formula;
