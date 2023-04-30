import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-5'>
            <Container>
            <h3>Q:What is useRef??</h3>
                <p className='text-justify'>Ans:The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. 
                These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). 
                The object can persist a value for a full lifetime of the component. </p>
            </Container>
        </div>
    );
};

export default Blog;