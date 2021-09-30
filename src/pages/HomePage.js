import React from "react";
import Article from '../components/Article';

const articles = [
    {
        id:1,
        title: 'Czym jest teoria strun',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam inventore, quam voluptate reprehenderit neque illo ex iure totam dolorem adipisci quo assumenda odio omnis impedit eaque voluptatem praesentium amet?'
    },
    {
        id:2,
        title: 'Czym jest teoria strun1',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam inventore, quam voluptate reprehenderit neque illo ex iure totam dolorem adipisci quo assumenda odio omnis impedit eaque voluptatem praesentium amet?'
    },
    {
        id:3,
        title: 'Czym jest teoria strun2',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam inventore, quam voluptate reprehenderit neque illo ex iure totam dolorem adipisci quo assumenda odio omnis impedit eaque voluptatem praesentium amet?'
    },
    {
        id:4,
        title: 'Czym jest teoria strun3',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam inventore, quam voluptate reprehenderit neque illo ex iure totam dolorem adipisci quo assumenda odio omnis impedit eaque voluptatem praesentium amet?'
    },
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;