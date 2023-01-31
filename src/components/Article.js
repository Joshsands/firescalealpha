import React from "react";
import SingleArticle from './SingleArticle'

const articles = {
    article1: {
    id: 'this is id1',
    title: 'this is title1',
    image: 'this is image1',
    description: 'this is description1',
    url: 'this is url1'
    },

    article2: {
        id: 'this is id2',
        title: 'this is title2',
        image: 'this is image2',
        description: 'this is description2',
        url: 'this is url2'
        },

        article3: {
            id: 'this is id3',
            title: 'this is title3',
            image: 'this is image3',
            description: 'this is description3',
            url: 'this is url3'
            }
};




const Article = ({ oneArticle }) => {

    return (
    Object.values(articles).forEach(val => {

    return <SingleArticle id={val.id} title={val.title} image={val.image} description={val.description} url={val.url} />

})
    )
}

export default Article