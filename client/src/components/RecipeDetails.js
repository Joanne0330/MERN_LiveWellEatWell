import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

export const RecipeDetails = (recipe) => {
    // let recipe = useLocation;
    const details = recipe.history.location.state.recipe.item.recipe
    console.log(details)
    return (
        <div>
            <h1 style={{color: '#008000', fontSize: '50px'}}>{details.label}</h1>
            <Link to='/'>Back to search</Link>
            <Container>
                <div  style={{marginLeft: '20%', marginRight: '20%'}}>
                <Card key={details.uri} border="warning" style={cardStyle}>
                            <Card.Header>See full recipe:
                                <br></br>
                                <Card.Link style={{fontSize: '20px'}}href={details.url} target="_blank">{details.source}</Card.Link>
                            </Card.Header>
                            <Card.Img variant="top" src={details.image} />
                            <Card.Body>
                                <Card.Title>{details.label}</Card.Title>
                                <br></br>
                                <Card.Subtitle style={{color: '#008000'}}>{details.ingredientLines.length} ingredients  |  Serves {details.yield}  |  {Math.round(details.calories / details.yield)} kcal</Card.Subtitle>
                                <br></br>
                                <Button variant="warning" size="lg">Save to collection</Button>
                                <br></br>
                                <br></br>
                                {details.ingredientLines.map(item => (
                                    <Card.Text>{item}</Card.Text>
                                ))}
                            </Card.Body>
                </Card> 
                </div>
            </Container>
        </div>
    )
}


const cardStyle = {
    // width: '40.rem',
    minHeight: '60rem',
    margin: '2rem', 
    padding: '1rem',
    // boxShadow: '10px 10px 14px #FFD700'
}
export default RecipeDetails;
