import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Topic.css'
import { Button } from 'react-bootstrap';
const Topic = (props) => {
    
    const {id, name, logo, total} = props.topic;
    const navigate = useNavigate()
    const quizHandle = ()=>{
        navigate(`/quiz/${id}`)
       
    }
    return (
        <div className='topic'>
            <img src={logo} alt=""></img>
            <div className='topic-info'>
            <p className='topic-name'>{name}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold'>Quiz Total:{total}</span>
            <Button onClick={quizHandle} className='btn-topic'>Quiz Start</Button> 
            </div>
            </div>
        </div>
    );
};

export default Topic;