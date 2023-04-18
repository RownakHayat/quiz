import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';





const Quiz = ({quiz, scroe, setScore}) => {
    const {question, options, correctAnswer} = quiz;
    const [check, setCheck] = useState('');
    const  [disable, setDisable] = useState('');
    const [message, setMessage] = useState('');
    const remove = question.replace('<p>', ' ').replace("</p>", " ").replace("?<p>", " ").replace("? <p>", "? ").replace("<p>Hint", "Hint");

    const correctanswer = ()=>{

        if (check === correctAnswer){
            setScore(scroe + 1);
            setDisable(true);
            setMessage(<small className='text-warning fw-bold mb-3'>Correct Answer</small>)
        }
        else if (check === ""){
            alert('Please select right answer')
        }
        else {
            setDisable(true);
            setMessage(<small className='text-danger fw-bold mb-3'>Correct answer:{correctAnswer}</small>)
        }
    }
   
    
    return (
        <div className='border border-1 w-lg-75 w-sm-100 m-auto p-5 mb-5 mt-5 rounded'>
            <h5 className='text-start mb-3'>{remove}</h5>
           {
                options.map(option => 
                    <Form.Check 
                    key={option.id}
                    className='d-flex justify-content-start mb-3 fw-bold text-success'
                    label={option}
                    value={option}
                    name="group1"
                    type={'radio'}
                    onChange={(e) => setCheck(e.target.value)}
                    />
                    )
           }
           <div className='text-end'>
            <Button variant='primary' onClick={correctanswer} disabled={disable}></Button>
           </div>
                {
                    message
                }
        </div>
    );
};

export default Quiz;