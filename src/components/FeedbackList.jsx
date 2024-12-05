import React from 'react'

const FeedbackList = ({feedback}) => {
  return (
    <>
      <div className="feedback-list">
        <h2>Feedback Recived</h2>
        {
            feedback.length > 0 ? (
                feedback.map((fb, index) => (
                    <div key={index} className="feedback-card">
                        <h3>{fb.name}</h3>
                        <p>{fb.feedback}</p>
                    </div>
                ))
            ) : (
                <p>No Feedback yet. Be the first to leave on!</p>
            )
        }
      </div>
    </>
  )
}

export default FeedbackList;
