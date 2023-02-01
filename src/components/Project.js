import React, {useState, useEffect} from "react";
import { Card, CardGroup, Row, Button, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../assets/projects/p1.png'

const projects = {

    'project1':
        
            {
                id: 1,
                title: 'this is title1',
                image: 'this is image1',
                description: 'this is description1',
                url: 'this is url1'
            }
        ,

    'project2':
        
            {
                id: 2,
                title: 'this is title2',
                image: 'https://drive.google.com/file/d/1nl9DzWVdiAfELkJgmD4lNmi4t8ONEWT9/view?usp=sharing',
                description: 'this is description2',
                url: 'this is url2'
            }
        
};

function Project() {
    return (
<div>




            {/* 👇️ iterate object VALUES */}
            {Object.entries(projects).map(([key, project]) => {
                return (
                        

<Row className="mx-auto" key={key}>
<Col>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<CardGroup>
<Card bg='light' className='m-2 infoCard'>


{/* <Card.Img variant="top"  className='w-25 h-25 d-flex justify-content-center mx-auto mt-4' src={project.image} alt={project.title} /> */}

<Card.Body>
<Card.Title className='bg-dark text-light text-center mx-auto m-2 h-50 d-flex justify-content-center align-items-center'><h3>{project.title}</h3></Card.Title>
<Card.Text className='mb-3 text-center'>
{project.description}
</Card.Text>




</Card.Body>
</Card>
</CardGroup>
</Col>
</Row>
                );
            })}
        </div>
            
    )
}
export default Project;