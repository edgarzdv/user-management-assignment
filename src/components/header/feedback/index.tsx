import React, { useState } from 'react'

import style from '../style.module.scss'
import Button from '../../button';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');


    const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFeedback(event.target.value);
    };
    const submitFeedback = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Feedback submitted:", feedback);
        setFeedback('');
    };
    return (
        <form onSubmit={submitFeedback}>
            <input
                type="text"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Send feedback"
                className={style.feedbackInput}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default Feedback