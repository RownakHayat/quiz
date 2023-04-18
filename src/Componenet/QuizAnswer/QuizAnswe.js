import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const QuizAnswe = () => {
    const quizAnswer = useLoaderData();
    const {total, name} = quizAnswer.data;
    const [score, setScore] = useState();

    return (
        <div className=''>
            <h2>Answer</h2>
            <Container>
                <div className='d-flex align-items-center justify-content-between mt-5'>
                    <h3 className='text-warning '>Topic Name:{name}</h3>
                    <h3 className='text-danger fw-bold'>Score:{score}/{total}</h3>
                </div>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        {
                            quizAnswer.map(quiz => <QuizAnswe
                            key={quiz.id}
                            quiz={quiz}
                            score={score}
                            setScore={setScore}
                            ></QuizAnswe>)
                        }
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default QuizAnswe;