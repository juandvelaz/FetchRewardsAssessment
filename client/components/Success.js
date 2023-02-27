import React from 'react';
import Confetti from 'react-confetti';

export default function Success() {
  return (
    <div className="formBox">
      <Confetti width={400} height={450} gravity={0.2} />
      <h1>Success</h1>
    </div>
  );
}
