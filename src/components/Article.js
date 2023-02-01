import React, {useState, useEffect} from "react";
import SingleArticle from './SingleArticle'
import { Card, CardGroup, Row, Button } from "react-bootstrap";

// const url = 'https://api.currentsapi.services/v1/latest-news?' +
// 'language=us&' +
// 'apiKey=eJmAOuVBY5PUoRdRLLIEgrI88D2Te2ayUsmkRnz9DTeU7DhH';


export default function Article() {



    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);

    const url ='https://bing-news-search1.p.rapidapi.com/news?category=business&safeSearch=Off&textFormat=Raw'

    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '6f674d8efbmsh45b3fe442ca5e92p147708jsnf79016036a61',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    

        useEffect(() => {


            fetch(url, options)
            .then(response => response.json())
            .then(response => setPosts(response.value))
            .catch(err => console.error(err));
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
            {Object.entries(posts).map(([key, post]) => {
               if (post.image === undefined) return null;
            //    console.log(post.image.thumbnail.contentUrl)

                return (
                        

<Row className="mx-auto" key={key}>


<CardGroup>
<Card bg='light' className='m-2 infoCard'>
<Card.Img variant="top"  className='w-25 h-25 d-flex justify-content-center mx-auto mt-4' src={post.image.thumbnail.contentUrl} alt={post.name} />
<Card.Body>
<Card.Title className='bg-secondary text-center m-2 h-50 d-flex justify-content align-items-center'><h3>{post.name}</h3></Card.Title>
<Card.Text className='mb-3 text-center'>
{post.description}
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
