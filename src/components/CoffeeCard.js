import React from 'react'
import { Button, Card } from 'react-bootstrap';


const CoffeeCard = (coffee) => {

    console.log(coffee.coffee)

    const renderCoffeeInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="bg-dark"><div className="text-light p-2">{coffee.coffee.title}</div></Card.Title>
                <Card.Text>
                    <p>{coffee.coffee.description}</p>
                    <p>Ingredients</p>
                    <ul>
                        <div>{coffee.coffee.ingredients.map(e => (
                            <li>{e}</li>
                        ))}</div>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <div>
            {coffee ? renderCoffeeInfo() : <p>no coffee available</p>}
        </div >
    )
}

export default CoffeeCard
