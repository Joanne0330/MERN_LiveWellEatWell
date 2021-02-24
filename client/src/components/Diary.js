import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import moment from 'moment';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


export const Diary = () => {
    const [diary, setDiary] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const formatter = (eachEvent) => {
        const x = moment(eachEvent.date).format('DD/MM/YYYY');
        return eachEvent.date = x;
    }

    const changeDate = async (diaryData) => {
        diaryData.forEach(each => formatter(each));
        setLoading(false);    
    }

    useEffect(() => {
        
        const fetchDiary = async () => {
            const res = await axios.get('/api/diary')
            console.log(res.data)
            changeDate(res.data);
            setDiary(res.data)
        }
        
        fetchDiary();
    }, [])
    
    
    
    

    return (
        <div>
            <Link to='/diary-form'>
                <Button 
                    variant='danger' 
                    renderAs='button'
                    size='large'
                >Record My Daily Activities
                </Button>
            </Link>
            <br></br>
            <br></br>
            <h1>My Daily Activities</h1>
            <br></br>
            {loading === false ? (

                <div style={{display: 'inline-block'}}>
                    <LineChart width={850} height={400} data={diary} >
                        <Line type="monotone" dataKey="physicalScore" stroke="#5F9EA0"/>
                        <Line type="monotone" dataKey="musicScore" stroke="#B22222"/>
                        <Line type="monotone" dataKey="workScore" stroke="#FFD700"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                    </LineChart>
                </div>
            ) : (
                <p>loading....</p>
            )}
        </div>
    )
}

export default Diary;
