import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='border'>
            <h2 className='text-info'>Inventory</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;