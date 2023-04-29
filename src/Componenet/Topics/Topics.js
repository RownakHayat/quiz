import React, {} from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from '../Topic/Topic';

import './Topics.css';


const Topics = () => {
   
   const topics = useLoaderData();
   console.log(topics)

    return (
        <div className='topics-container'>
            <div className="topic-container">
                {
                    topics.map (topic => <Topic
                    key= {topic.id}
                    topic = {topic}
                    ></Topic> 
                    )
                }
            </div>
            
        </div>
    );
};

export default Topics;