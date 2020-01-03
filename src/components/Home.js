import React from 'react'
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
        <h1>Quiz App</h1>
        <Link href="/game" className="btn">Start Game</Link>
        <Link href="/highScores" className="btn">
          High Scores
        </Link>
    </>
  );
}