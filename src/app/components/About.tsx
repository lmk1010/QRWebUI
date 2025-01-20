import React from 'react';

const About = () => {
    return (
        <div className="bg-white">
            {/* About Header */}
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-xl text-gray-600 mt-4">Sustainable QR Code Generation Innovation</p>
                <hr className="my-8 border-t-2 w-1/4 mx-auto" />
                <p className="text-lg text-gray-600 mt-4">
                    We are committed to providing innovative QR code generation tools that serve various fields including
                    business, life, and personal use. Our platform supports a wide range of customizable operations,
                    allowing users to quickly generate QR codes tailored to their specific needs. Whether for promotions,
                    business cards, payments, or other scenarios, our tool offers convenient and efficient QR code solutions
                    that enhance productivity and fulfill personalized requirements in multiple aspects.
                </p>
            </div>

            {/* Image Section */}
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex justify-center items-center">
                    <img
                        src="/assets/pexels-A.png"
                        alt="Image 1"
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="/assets/pexels-B.png"
                        alt="Image 2"
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="/assets/pexels-C.png"
                        alt="Image 3"
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
