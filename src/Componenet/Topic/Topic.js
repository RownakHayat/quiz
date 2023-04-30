import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Topic.css'
import { Button, Col } from 'react-bootstrap';
const Topic = ({topic}) => {
    
    const {id, name, logo, total} = topic;
    
    const navigate = useNavigate();
    const quizHandle = ()=>{
        navigate(`/quiz/${id}`)
       
    }
    return (
        <Col>
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
        </Col>
    );
};

export default Topic;