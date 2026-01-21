import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner/>
            <Books data={data}/>
        </div>
    );
};

export default Home;