import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Diary = () => {
    const [diary, setDiary] = useState([])

    useEffect( () => {
        const fetchDiary = async () => {

            const res = await axios.get('/api/diary')

            setDiary(res.data)
            console.log(diary)
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
            <h1>Diary</h1>
        </div>
    )
}

export default Diary;
