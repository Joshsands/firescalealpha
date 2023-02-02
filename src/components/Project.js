import React, {useState, useEffect} from "react";
import { Card, CardGroup, Row, Button, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../assets/projects/p1.png'
import p2 from '../assets/projects/p2.png'
import p3 from '../assets/projects/p3.png'
import p4 from '../assets/projects/p4.png'
import p5 from '../assets/projects/p5.png'
import p6 from '../assets/projects/p6.png'

const projects = {

    'project1':
        
            {
                id: 1,
                title1: 'Fire Alarm Details Page',
                title2: 'Fire Alarm System Riser Diagram',
                title3: 'Fire Alarm Floorplan Layout',
                image1: p1,
                image2: p2,
                image3: p3,
                description1: 'NFPA 72 code compliant fire alarm notes',
                description2: 'System layout of all the connected devices',
                description3: 'Fire alarm device location layout',
            }
        ,

    'project2':
        
            {
                id: 2,
                title1: 'Fire Alarm Details Page',
                title2: 'Fire Alarm System Riser Diagram',
                title3: 'Fire Alarm Floorplan Layout',
                image1: p4,
                image2: p5,
                image3: p6,
                description1: 'NFPA 72 code compliant fire alarm notes',
                description2: 'System layout of all the connected devices',
                description3: 'Fire alarm device location layout',
            }
        
};

function Project() {

    return (
<Row className="mx-auto" xs={1} md={1} lg={1} >
            {/* 👇️ iterate object VALUES */}
            {Object.entries(projects).map(([key, project]) => {
                return (
                        
<Col key={key} className='my-3' >

<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.image1}
          alt={project.title1}
        />
        <Carousel.Caption>
          <h3 className="bg-dark text-danger roundIntro">{project.title1}</h3>
          <p className="bg-dark text-danger roundIntro">{project.description1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.image2}
          alt={project.title2}
        />

        <Carousel.Caption>
          <h3 className="bg-dark text-danger roundIntro">{project.title2}</h3>
          <p className="bg-dark text-danger roundIntro">{project.description2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project.image3}
          alt={project.title3}
        />

        <Carousel.Caption>
          <h3 className="bg-dark text-danger roundIntro">{project.title3}</h3>
          <p className="bg-dark text-danger roundIntro">
          {project.description3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* <CardGroup>
<Card bg='light' className='m-2 infoCard'> */}


{/* <Card.Img variant="top"  className='w-25 h-25 d-flex justify-content-center mx-auto mt-4' src={project.image} alt={project.title} /> */}

{/* <Card.Body>
<Card.Title className='bg-dark text-light text-center mx-auto m-2 h-50 d-flex justify-content-center align-items-center'><h3>{project.title}</h3></Card.Title>
<Card.Text className='mb-3 text-center'>
{project.description}
</Card.Text>
</Card.Body>
</Card>
</CardGroup> */}
</Col>

                );
            })}
     </Row>
            
    )
}
export default Project;