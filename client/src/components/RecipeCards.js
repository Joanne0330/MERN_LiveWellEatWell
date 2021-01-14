import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const RecipeCards = (items) => {
    console.log(items)

    return ( 
        <Container fluid>

        <div style={pageStyle}>
            {items.items.map(dish => (
                
                <Card key={dish.recipe.uri} border="warning" style={cardStyle}>
                        <Card.Header>See full recipe:
                            <br></br>
                            <Card.Link style={{fontSize: '20px'}}href={dish.recipe.url} target="_blank">{dish.recipe.source}</Card.Link>
                        </Card.Header>
                        <Card.Img variant="top" src={dish.recipe.image} />
                        <Card.Body>
                            <Card.Title>{dish.recipe.label}</Card.Title>
                            <Card.Text style={{color: 'grey'}}>{dish.recipe.ingredientLines.length} ingredients</Card.Text>
                            <Card.Text style={{color: 'grey'}}>Serves {dish.recipe.yield}</Card.Text>
                            <Card.Text style={{color: 'grey'}}>{Math.round(dish.recipe.calories / dish.recipe.yield)} kcal per serving</Card.Text>
                            <Button variant="warning" size='lg' block>Details</Button>
                        </Card.Body>
   
                    </Card>
                
                ))}
        </div>
        </Container>
    )
            
}

const pageStyle = {
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justfyContent: 'space-evenly'
}

const cardStyle = {
    width: '22.2rem',
    margin: '2rem', 
    padding: '1rem',
    // boxShadow: '10px 10px 14px #FFD700'
}

export default RecipeCards;
