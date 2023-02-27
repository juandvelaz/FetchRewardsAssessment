import React from 'react';
import Confetti from 'react-confetti';

export default function Success() {
  return (
    <div className="formBox">
      <Confetti width={400} height={450} gravity={0.2} />
      <div className="successBox">
        <h1>! Success !</h1>
        <h1>My email is juandvelaz@gmail.com</h1>
        <a href="https://github.com/juandvelaz/FetchRewardsAssessment">
          Click Here to see the source code
        </a>
      </div>
    </div>
  );
}
