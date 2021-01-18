import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const CollectionCard = (item) => {
    console.log(item)
    return (
        <div>
                <Card key={item.item.uri} border="danger" style={cardStyle}>
                            <Card.Header>See full recipe:
                                <br></br>
                                <Card.Link style={{fontSize: '20px'}}href={item.item.url} target="_blank">{item.item.source}</Card.Link>
                            </Card.Header>
                            <Card.Img variant="top" src={item.item.image} />
                            <Card.Body>
                                <Card.Title>{item.item.label}</Card.Title>
                                <br></br>
                                <Card.Subtitle style={{color: '#008000'}}>{item.item.ingredientLines.length} ingredients  |  Serves {item.item.yield}  |  {Math.round(item.item.calories / item.item.yield)} kcal</Card.Subtitle>
                                <br></br>
                                <Button 
                                    variant="danger" 
                                    size="lg"
                                >Delete</Button>
                                <br></br>
                                <br></br>
                                {item.item.ingredientLines.map(ingredient => (
                                    <Card.Text>{ingredient}</Card.Text>
                                ))}
                            </Card.Body>
                </Card>
        </div>
    )
}
const cardStyle = {
    width: '30rem',
    minHeight: '60rem',
    margin: '2rem', 
    padding: '1rem'
}

export default CollectionCard;