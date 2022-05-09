import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='container-fluid'>
            <div >
                <div className='col-12'>
                    
                </div>
                <div className='col-12 mt-5 pt-5'>
                <h2 className='banner-title'>Track cars you’ve watched.<br></br>
Save those you want to see.<br></br>
Tell your friends what’s good. </h2>
                </div>
                <div>
                    <button className='btn-info rounded text-white'>Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;