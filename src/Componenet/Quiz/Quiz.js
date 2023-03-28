import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';



const Quiz = () => {
    const quiz = useLoaderData();
    const {total, name} = quiz;
    const [score, setScore] = useState(0);
   
    
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between mt-5'>
                <h3 className='text-warning '>Topic Name:{name}</h3>
                <h3 className='text-danger fw-bold '>Score :{total}</h3>
            </div>
            <Row>
                <Col lg={12} md={12} sm={12}>
                {
             (quiz.quistion).map(quiz => console.log(quiz)
              )
            }
                </Col>
           
            </Row>
        </div>
    );
};

export default Quiz;