import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const RecipeCards = (items) => {
    console.log(items)

    return ( 
        <div style={pageStyle}>
            {items.items.map(dish => (

                    <Card key={dish.recipe.uri} bg="light" border="info" style={{ width: '25rem', margin: '2rem', padding: '1rem'}}>
                    <Card.Header>See full recipe:
                        <br></br>
                        <Card.Link href={dish.recipe.url} target="_blank">{dish.recipe.source}</Card.Link>
                    </Card.Header>
                        <Card.Img variant="top" src={dish.recipe.image} />
                        <Card.Body>
                            <Card.Title>{dish.recipe.label}</Card.Title>
                            <Card.Text>No. of ingredients: {dish.recipe.ingredientLines.length}</Card.Text>
                            <Button variant="info" size='lg' block>Details</Button>
                        </Card.Body>
                        <Card.Footer>Calories: {Math.round(dish.recipe.calories)} kcal</Card.Footer>
                    </Card>
                
            ))}
        </div>
    )
            
}

const pageStyle = {
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justfyContent: 'space-evenly'
}

export default RecipeCards;
