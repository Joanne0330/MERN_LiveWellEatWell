import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import RecipeCards from '../RecipeCards';
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
                <h1>Welcome to Live Well, Eat Well</h1>
            </div>
            <div>
                <input 
                    type='text'
                    placeholder='Search recipes via ingredient, eg. chicken...'
                    value={query}
                    onChange={event => {
                        event.preventDefault();
                        setQuery(event.target.value)
                    }}    
                />
                <button
                    type='button'
                    onClick={() => setSearch(query)}
                >
                Search
                </button>
            </div>
            <RecipeCards items={hits.hits}/>
        </Fragment>
    )
}


export default HomePage;
