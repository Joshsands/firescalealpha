import React, {useState, useEffect} from "react";
import SingleArticle from './SingleArticle'
import { Card, CardGroup, Row } from "react-bootstrap";




export default function Article() {



    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {

    //     var url = 'https://api.currentsapi.services/v1/latest-news?' +
    //     'language=us&' +
    //     'apiKey=eJmAOuVBY5PUoRdRLLIEgrI88D2Te2ayUsmkRnz9DTeU7DhH';
    //     var req = new Request(url);

    //   fetch(req)
    //     .then(res => res.json())
    //     .then(data => setPosts(data));
    // }, []);

    useEffect(() => {

        const url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=us&' +
        'apiKey=eJmAOuVBY5PUoRdRLLIEgrI88D2Te2ayUsmkRnz9DTeU7DhH';

      fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
    }, []);


    const articles = {

        'article1':
            
                {
                    id: 1,
                    title: 'this is title1',
                    image: 'this is image1',
                    description: 'this is description1',
                    url: 'this is url1'
                }
            ,

        'article2':
            
                {
                    id: 2,
                    title: 'this is title2',
                    image: 'this is image2',
                    description: 'this is description2',
                    url: 'this is url2'
                }
            
    };


    return (
        //    <SingleArticle id={val.id} title={val.title} image={val.image} description={val.description} url={val.url} />
        // <SingleArticle />

        <div>
            {/* 👇️ iterate object VALUES */}
            {Object.entries(articles).map((value) => {
            //    console.log(value)
                return (
                        

<Row className="mx-auto" key={value[1].id}>
<CardGroup>
<Card bg='light' className='m-2 infoCard'>
<Card.Img variant="top"  className='h-50' src={value[1].image} alt={value[1].id} />
<Card.Body>
<Card.Title className='bg-secondary text-center m-2 h-50'><h3>{value[1].title}</h3></Card.Title>
<Card.Text className='mb-3'>
{value[1].description}
</Card.Text>
</Card.Body>
</Card>
</CardGroup>
</Row>
                );
            })}
        </div>


    )
}
