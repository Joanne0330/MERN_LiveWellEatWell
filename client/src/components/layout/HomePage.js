import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import RecipeCards from '../RecipeCards';
const API_KEY = process.env.REACT_APP_API_KEY;

export const HomePage = () => {
    const wow = 'wow'
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
            <h1>at homepage</h1>
            <p>{wow}</p>
            <input 
                type='text'
                place='Search recipes via ingredient, eg: chicken...'
                value={query}
                onChange={even => setQuery(even.target.value)}    
            />
            <button
                type='button'
                onClick={() => setSearch(query)}
            >
            Search
            </button>
            {hits.hits.map((item, id) => ( 
               <RecipeCards key={id} item={item} />
            ))}
        </Fragment>
    )
}

export default HomePage;
