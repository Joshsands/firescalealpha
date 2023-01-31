import React from "react";
import { Card, CardGroup, Row } from "react-bootstrap";


export default function SingleArticle({ oneArticle }) {

    console.log(oneArticle)

    return (
        <Row className="mx-auto">
            <CardGroup>
      <Card bg='light' className='m-2 infoCard'>
        <Card.Img variant="top"  className='h-50' src={oneArticle.image} alt={oneArticle.id} />
        <Card.Body>
          <Card.Title className='bg-secondary text-center m-2 h-50'><h3>{oneArticle.title}</h3></Card.Title>
          <Card.Text className='mb-3'>
           {oneArticle.description}
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        </Row>
    )

}