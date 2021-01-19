import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import RecipeCards from '../RecipeCards';
import Container from 'react-bootstrap/Container';



const API_KEY = process.env.REACT_APP_API_KEY;

export const HomePage = () => {
    const [hits, setHits] = useState({hits: []});
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.edamam.com/search?q=${search}&app_id=92fdc86e&app_key=${API_KEY}&from=0&to=50`)
            const items = res.data.hits

            setHits({hits: items})
            console.log(items)
            console.log(hits.hits)
        };
        fetchData();
        
    }, [search]);
    return (
        <Fragment>
            <div>
                <input 
                    style={inputStyle}
                    type='text'
                    placeholder='Search via ingredient(s), eg. chicken...'
                    value={query}
                    onChange={event => {
                        event.preventDefault();
                        setQuery(event.target.value)
                    }}    
                />
                {'   '}
                <Button
                    variant='warning'
                    // type='button'
                    onClick={() => setSearch(query)}
                >
                Search
                </Button>
            </div>
            <Container fluid>
                <div style={pageStyle}>
                    {hits.hits.map(item => (
                        <RecipeCards item={item}/>
                    ))}
                </div>
            </Container>
        </Fragment>
    )
}
const pageStyle = {
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justfyContent: 'space-evenly'
}

const inputStyle = {
    width: '25%',
    padding: '10px 18px',
    margin: '8px 0',
    border: '2px solid red',
    borderRadius: '4px',
    fontSize: '20px',
    fontFamily: 'Tahoma'
}

export default HomePage;
