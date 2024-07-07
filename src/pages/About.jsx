import React from 'react';
import TopBloggers from '../Components/TopBloggers';
import Subscribe from '../Components/Subscribe';

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <header className="mb-20 p-6 rounded-lg shadow-lg">
                    <h1 className="text-orange-500 text-3xl font-bold text-center mb-5">About Us</h1>
            </header>
            
            <section className="my-20 bg-orange-50 p-10 rounded-lg shadow-lg py-24">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our History</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Founded in 2010, our blog started as a small project to share personal stories and insights.
                    Over the years, it has grown into a platform with a diverse range of topics and a vibrant community
                    of readers. Our journey has been fueled by passion, dedication, and the continuous support of our audience.
                </p>
            </section>


            <section className="my-10 bg-orange-50 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Top Managers</h2>
                <TopBloggers />
            </section>

            <section className="my-10 bg-orange-50 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Subscribe to Our Newsletter</h2>
                <Subscribe />
            </section>
        </div>
    );
};

const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', photo: 'https://source.unsplash.com/random/300x300?face' },
    { name: 'Jane Smith', role: 'Chief Editor', photo: 'https://source.unsplash.com/random/300x300?woman' },
    { name: 'Sam Wilson', role: 'Content Manager', photo: 'https://source.unsplash.com/random/300x300?man' },
];

export default About;
