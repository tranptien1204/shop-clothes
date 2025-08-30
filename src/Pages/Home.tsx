import React from 'react';
import Hero from '../Components/Hero';
import LatestCollection from '../Components/LatestCollection';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';
import NewsBox from '../Components/NewsBox';
import ProductProvider from '../Context/ProductProvider';
const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsBox />
        </div>
    );
};

export default Home;