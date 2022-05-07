import React from 'react';

const Notfound = () => {
    return (
        <div className='border mb-0'>
            <h2 className='text-info'>Not found</h2>
            <div className='row'>
                <div className='col-8'>
                 <img className='rounded img-fluid' src='https://imgs.search.brave.com/AiUrIqcuIp64-10fnQtUEhagqMReMAq7Q4MdHzKoZ3g/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9sZWFy/bi5jYW52YS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDYvNTAtb2YtdGhl/LW1vc3QtY3JlYXRp/dmUtNDA0LXBhZ2Vz/LW9uLXRoZS13ZWIu/cG5n'/>   
                </div>
                <div className='col-4'>
                 <h2 className='text-danger d-flex align-items-center justify-content-center'>The page you are looking for Not Found</h2>
                 <p className='text-danger'>Please try a different route!</p>   
                </div>
            </div>
        </div>
    );
};

export default Notfound;