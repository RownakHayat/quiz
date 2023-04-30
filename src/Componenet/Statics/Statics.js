import React from 'react';
import { Container, Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const Statics = () => {
    const statics = useLoaderData();
    const data = statics.data;
    
    return (
        <Container>
            <ResponsiveContainer width="100%" height={300} className="m-5">
                <BarChart data={data}>
                    <XAxis dataKey="name" stroke='#8884d8'/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid stroke='#ccc' strokeDasharray="4 4"/>
                    <Bar dataKey="total" fill='#8884d8' barSize={30}/>
                </BarChart>
            </ResponsiveContainer>
            
        </Container>
    );
};

export default Statics;