import React from 'react';
import banner_bg from '/banner.jpg' ;


const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner_bg})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100%',
        
    }

    // const fontStyle={
    //     color: 'white',
    //     padding: "100px 0",
    //     textAlign:" center",
    //     fontSize: "60px"
    //     // marginTop:'200px'
       
    // }
    return (
        <div className='p-6'>
            <div style={bannerStyle} >

            <div className='center pt-40 text-center text-orange-600 '>
               <div>
               <h1 className='font-bold text-5xl mb-7'>Product Manager</h1>
                
                <p className='font-bold'> Buy and Mange your product's Absoloutely free </p>
                
               </div>
        
                </div>

            </div>
        </div>
    );
};

export default Banner;