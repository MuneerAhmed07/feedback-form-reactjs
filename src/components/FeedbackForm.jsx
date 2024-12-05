import { useState } from "react";

const FeedbackForm = ({addFeedback}) => {

    const [formData, setFormData] = useState({
        name: "",
        feedback: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
           ...prev,
            [name]:value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name.trim() && formData.feedback.trim()) {
            addFeedback(formData);
            setFormData({name: "", feedback: ''});
        }else{
            alert("Please Fill in all fields");
        }
    }

  return (
    <>
     <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Submit Your Feedback</h2>
        <input type="text"
            name='name'
            placeholder='Your Name'
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
            required
        />
        <textarea name="feedback"
            placeholder='Your feedback'
            rows="4"
            autoComplete='off'
            value={formData.feedback}
            onChange={handleChange}
            required
        ></textarea>
        <button type='submit'>Submit</button>
    </form> 
    </>
  )
}

export default FeedbackForm;
