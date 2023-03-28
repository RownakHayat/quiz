import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Topic.css'
const Topic = (props) => {
    
    const {id, name, logo, total} = props.topic;
    const navigate = useNavigate()
    const quizHandle = ()=>{
        navigate(`/quiz/${id}`)
        // console.log(quizHandle)
    }
    return (
        <div className='topic'>
            <img src={logo} alt=""></img>
            <div className='topic-info'>
            <p className='topic-name'>{name}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold'>Quiz Total:{total}</span>
            <button onClick={quizHandle} className='btn-topic'>Quiz Start </button>
            </div>
            </div>
        </div>
    );
};

export default Topic;