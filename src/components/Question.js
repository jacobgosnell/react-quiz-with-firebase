import React from 'react'

// destructures props, property of props is question
export default function Question({ question }) {
  return (
		<div>
			<h2>{question.question}</h2>
			{question.answerChoices.map((choice, index) => (
				<div className="choice-container">
					<p className="choice-prefix">{index + 1}</p>
					<p className="choice-text">{question.answerChoices[index]}</p>
				</div>
			))} 
		</div>
	);
}