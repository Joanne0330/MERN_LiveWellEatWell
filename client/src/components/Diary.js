import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import moment from 'moment';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


export const Diary = () => {
    const [diary, setDiary] = useState([])

    useEffect(() => {
        const fetchDiary = async () => {

            const res = await axios.get('/api/diary')

            setDiary(res.data)
            console.log(diary)
        }
        fetchDiary();
    }, [])

    const dateFormatter = (jsonDate) => {
        return moment(jsonDate).format('DD/MM/YYYY')
    }

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
            <div style={{display: 'inline-block'}}>
                <LineChart width={500} height={400} data={diary} >
                    <Line type="monotone" dataKey="physicalScore" stroke="#5F9EA0"/>
                    <Line type="monotone" dataKey="musicScore" stroke="#B22222"/>
                    <Line type="monotone" dataKey="workScore" stroke="#FFD700"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="date" tickFormatter={dateFormatter} />
                    <YAxis />
                    <Tooltip tickFormatter={dateFormatter}/>
                </LineChart>
            </div>
        </div>
    )
}

export default Diary;
