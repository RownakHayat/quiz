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
                   Object.entries(topics.data).map (topic => <Topic
                    key= {topic[1].id}
                    topic = {topic[1]}
                    ></Topic> 
                    )
                }
            </div>
            
        </div>
    );
};

export default Topics;