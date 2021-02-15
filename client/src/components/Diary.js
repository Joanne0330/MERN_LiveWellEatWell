import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Diary = () => {
    return (
        <div>
            <Link to='/diary-form'>
                <Button 
                    variant='danger' 
                    renderAs='button'
                    size='large'
                >Record My Daily Activities</Button>
            </Link>
            <h1>Diary</h1>
        </div>
    )
}

export default Diary;
