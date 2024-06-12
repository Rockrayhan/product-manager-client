import React from 'react';
import TopBloggers from '../Components/TopBloggers';
import Subscribe from '../Components/Subscribe';

const About = () => {
    return (
        <div className="container mx-auto -mt-10 p-6">
            <section className="my-10 bg-gray-100 p-10 rounded-lg shadow-lg mb-20">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our History</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Founded in 2010, our blog started as a small project to share personal stories and insights.
                    Over the years, it has grown into a platform with a diverse range of topics and a vibrant community
                    of readers. Our journey has been fueled by passion, dedication, and the continuous support of our audience.
                </p>
            </section>

                <TopBloggers></TopBloggers>


                <Subscribe/>
          
        </div>
    );
};

export default About;
