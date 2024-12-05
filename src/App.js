import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';
import { useState } from 'react';

function App() {

  const [feedback, setFeedback] = useState([]);
  console.log(feedback);

  const addFeedback = (feedback) => {
    setFeedback((prev) => [...prev, feedback]);
  }

  return (
    <div className="App">
     <FeedbackForm addFeedback={addFeedback} />
     <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
