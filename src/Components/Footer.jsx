import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-orange-300  py-10 mt-32">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* About Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="">
                    We are passionate about sharing knowledge, insights, and stories that inspire and inform. Our team is dedicated to providing you with high-quality content that enriches your mind and soul.
                </p>
            </div>

            {/* Quick Links Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <ul className="space-y-2">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About Us</a></li>
                    <li><a href="/blog" className="hover:underline">Blog</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>

            {/* Social Media Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className=" hover:text-gray-100">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.404.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.794.715-1.794 1.763v2.314h3.588l-.468 3.622h-3.12V24h6.116c.729 0 1.325-.596 1.325-1.324V1.325C24 .595 23.404 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" className=" hover:text-gray-100">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.925 4.925 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.379 4.482c-4.086-.2-7.719-2.158-10.148-5.134a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.19 4.1a4.9 4.9 0 01-2.228-.616v.061a4.926 4.926 0 003.95 4.827 4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.417 9.86 9.86 0 01-6.1 2.104c-.395 0-.785-.023-1.17-.069a13.94 13.94 0 007.557 2.212c9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.016-.634a9.935 9.935 0 002.457-2.548l.002-.003z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" className=" hover:text-gray-100">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.67.014-4.947.072-1.521.065-2.884.331-3.95 1.397-1.066 1.066-1.332 2.429-1.397 3.95-.058 1.277-.072 1.69-.072 4.947s.014 3.67.072 4.947c.065 1.521.331 2.884 1.397 3.95 1.066 1.066 2.429 1.332 3.95 1.397 1.277.058 1.69.072 4.947.072s3.67-.014 4.947-.072c1.521-.065 2.884-.331 3.95-1.397 1.066-1.066 1.332-2.429 1.397-3.95.058-1.277.072-1.69.072-4.947s-.014-3.67-.072-4.947c-.065-1.521-.331-2.884-1.397-3.95-1.066-1.066-2.429-1.332-3.95-1.397-1.277-.058-1.69-.072-4.947-.072zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm7.2-10.851a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="">&copy; 2024 Travel-Masters. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;