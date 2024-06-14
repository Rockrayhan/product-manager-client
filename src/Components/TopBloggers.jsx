import React from 'react';

const TopBloggers = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-10 10 gap-6 container'>
        <div className="col-span-1">
            <div className='flex flex-col gap-10'>

                <h4 className='text-sky-600	font-semibold'> Not sure where to start ?</h4>
                <h1 className='text-4xl font-bold text-teal-950'>Some Of Our Top Managers</h1>
                <p className='text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quis facere obcaecati dolores distinctio amet explicabo! Delectus molestiae enim numquam, necessitatibus, sit sint nam ut at esse rerum sequi placeat.
                </p>

                <div className='flex gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className=" h-6 text-slate-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <h3 className='text-xl font-semibold'>Develop your skills Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                </div>

                <div className='flex gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className=" h-6 text-slate-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <h3 className='text-xl font-semibold'>Share your knowledge Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>

                <div className='flex gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className=" h-6 text-slate-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <h3 className='text-xl font-semibold'>Earn from globally Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                </div>

                <button className='bg-red-500 font-bold text-white p-4 w-2/6 rounded-lg'> Start Blogging Today </button>

            </div>
        </div>

        <div className="col-span-1">
            <div className='grid grid-cols-2 gap-6'>
                {/* each blogger card */}
                <div className='col-span-1 bg-orange-100 '>
                    <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                        <img src="https://d2w1le1t5r6d3w.cloudfront.net/Team/_1200x801_crop_center-center_82_line/DSC06531.jpg" alt="" />
                        <h1 className='text-2xl font-semibold'> Bear Grylls </h1>
                        <h6 className='text-gray-600'> PMO expert </h6>
                
                    </div>
                </div>
                {/* each blogger card */}
                <div className='col-span-1 bg-slate-100 '>
                    <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                        <img src="https://st2.depositphotos.com/4290619/11455/i/450/depositphotos_114557454-stock-photo-young-traveler-wearing-a-hat.jpg" alt="" />
                        <h1 className='text-2xl font-semibold'> Jessy Pinkman </h1>
                        <h6 className='text-gray-600'> Galaxy CTO </h6>
                      
                    </div>
                </div>
                {/* each blogger card */}
                <div className='col-span-1 bg-slate-100 '>
                    <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                        <img src="https://media.cntraveller.com/photos/611be9694e09f53b43732aa4/master/w_1600%2Cc_limit/adam-driver-tracks-film-still-conde-nast-traveller-5oct15-rex_.jpg" alt="" />
                        <h1 className='text-2xl font-semibold'> Billy Butcher </h1>
                        <h6 className='text-gray-600'> Marketer </h6>
                   
                    </div>
                </div>
                {/* each blogger card */}
                <div className='col-span-1 bg-orange-100 '>
                    <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/01/04/Photos/ben--621x414.jpg" alt="" />
                        <h1 className='text-2xl font-semibold'> Walter Mitty </h1>
                        <h6 className='text-gray-600'> PhotoGrapher </h6>
                     
                    </div>
                </div>


            </div>

        </div>
    </div>
    );
};

export default TopBloggers;