import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import CollectionCard from './CollectionCard';

export const RecipeCollection = () => {

    const [hits, setHits] = useState([]);
    useEffect(() => {

        const fetchRecipes = async () => {
            const res = await axios.get('/api/recipes');
            console.log(res.data);
            setHits(res.data)
        }
        fetchRecipes();
    }, [])
    return (
        <Fragment>
            <div>
                <h2 style={{color: 'red'}}>My collection</h2>
                <br></br>
            </div>
            <Container fluid>
                <div style={pageStyle}>
                    {hits.map(item => (
                        <CollectionCard item={item}/>
                    ))}
                        
                </div>
            </Container>
        </Fragment>
    )
}

const pageStyle = {
    marginLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justfyContent: 'space-evenly'
}

export default RecipeCollection;
