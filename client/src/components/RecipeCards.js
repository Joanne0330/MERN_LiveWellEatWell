import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const RecipeCards = (item) => {
    console.log(item)
    return ( 

            <div>            
                <Card key={item.item.recipe.uri} border="warning" style={cardStyle}>
                        <Card.Header>See full recipe:
                            <br></br>
                            <Card.Link style={{fontSize: '20px'}}href={item.item.recipe.url} target="_blank">{item.item.recipe.source}</Card.Link>
                        </Card.Header>
                        <Card.Img variant="top" src={item.item.recipe.image} />
                        <Card.Body>
                            <Card.Title>{item.item.recipe.label}</Card.Title>
                            <br></br>
                            <Card.Subtitle style={{color: '#008000'}}>{item.item.recipe.ingredientLines.length} ingredients  |  Serves {item.item.recipe.yield}  |  {Math.round(item.item.recipe.calories / item.item.recipe.yield)} kcal</Card.Subtitle>
                            <br></br>
                            <Button variant="warning" size="lg">Save to collection</Button>
                            <br></br>
                            <Link to={{ pathname: `/details/${item.item.recipe.uri}`, state: {recipe: item} }} >Details</Link>
                        </Card.Body>
   
                </Card>     
           </div>
    )
            
}

const cardStyle = {
    width: '22.2rem',
    margin: '2rem', 
    padding: '1rem',
    // boxShadow: '10px 10px 14px #FFD700'
}

export default RecipeCards;
