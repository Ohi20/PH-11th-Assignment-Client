import React from 'react';
import Banner from '../Banner/Banner';
import Extrasection1 from '../Extrasection1/Extrasection1';
import Extrasection2 from '../Extrasection2/Extrasection2';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extrasection2></Extrasection2>
            <Inventory></Inventory>
            <Extrasection1></Extrasection1>
            <Footer></Footer>
        </div>
    );
};

export default Home;