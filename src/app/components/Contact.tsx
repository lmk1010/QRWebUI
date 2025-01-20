import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="text-center py-12">
                <h1 className="text-4xl font-semibold text-gray-800">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-600">Feel free to reach out, and we will respond as soon as possible!</p>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sales and Product Inquiries */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Sales and Product Inquiries</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            If you have any questions or inquiries about our products, please contact us using the details below.
                        </p>
                        <div className="mt-8">
                            <p className="text-lg font-semibold text-gray-800">Email:</p>
                            <a href="mailto:lmkbnb0@gmail.com" className="text-blue-500 text-xl font-medium">
                                lmkbnb0@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Product and Technical Support */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Product and Technical Support</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            If you encounter any issues with our products or need technical support, feel free to contact us by email, and we will assist you.
                        </p>
                        <div className="mt-8">
                            <p className="text-lg font-semibold text-gray-800">Email:</p>
                            <a href="mailto:lmkbnb0@gmail.com" className="text-blue-500 text-xl font-medium">
                                lmkbnb0@gmail.com
                            </a>
                        </div>
                    </div>
                </section>

                {/* Additional Information */}
                <section className="mt-8">
                    <p className="text-lg text-gray-600">
                        We will get back to you as soon as possible and respond via email. Thank you for your support!
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Contact;
