import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <div className="bg-white">
            {/* About Header */}
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About QRCodeHub</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">Empowering Digital Innovation Through Accessible QR Code Technology</p>
                <hr className="my-8 border-t-2 w-1/4 mx-auto" />
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Founded with a vision to democratize digital technology, QRCodeHub has been at the forefront 
                    of QR code innovation since our inception. We believe that powerful digital tools should be 
                    accessible to everyone, regardless of technical expertise or budget constraints.
                </p>
            </div>

            {/* Mission & Vision Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To provide the most user-friendly, feature-rich, and completely free QR code 
                                generation platform that empowers individuals and businesses to bridge the gap 
                                between physical and digital worlds seamlessly.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
                                <span className="text-2xl">🔮</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To become the global standard for QR code generation, recognized for innovation, 
                                reliability, and commitment to making advanced digital tools accessible to everyone 
                                worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🆓</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Accessibility</h3>
                            <p className="text-gray-600">
                                We believe powerful tools should be free and accessible to everyone, 
                                regardless of their technical background or financial situation.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Privacy First</h3>
                            <p className="text-gray-600">
                                Your data security is our priority. We never store personal information 
                                and ensure complete privacy in all our operations.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
                            <p className="text-gray-600">
                                We continuously innovate and improve our platform to provide cutting-edge 
                                features while maintaining simplicity and ease of use.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                            <p className="text-gray-600">
                                We value our user community and actively seek feedback to improve our 
                                services and create better user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Story</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                QRCodeHub was born from a simple observation: while QR codes had become ubiquitous 
                                in modern digital communication, the tools to create them were either too expensive, 
                                too complex, or too limited in functionality.
                            </p>
                            <p>
                                Our team of digital innovators and user experience experts came together with a 
                                shared vision: to create a QR code generator that would be powerful enough for 
                                enterprise use, yet simple enough for anyone to use without any technical knowledge.
                            </p>
                            <p>
                                Since our launch, we&apos;ve helped millions of users worldwide create professional 
                                QR codes for their businesses, events, and personal projects. From small local 
                                businesses to multinational corporations, from individual creators to educational 
                                institutions, our platform serves diverse needs across the globe.
                            </p>
                            <p>
                                Today, QRCodeHub continues to evolve, incorporating the latest technological 
                                advancements while maintaining our core commitment to accessibility, privacy, 
                                and user experience excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">👨‍💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Development Team</h3>
                            <p className="text-gray-600">
                                Our skilled developers work tirelessly to ensure the platform runs smoothly, 
                                securely, and efficiently, implementing the latest web technologies and best practices.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Design Team</h3>
                            <p className="text-gray-600">
                                Our UX/UI designers focus on creating intuitive, beautiful, and accessible 
                                interfaces that make QR code generation a delightful experience for all users.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📞</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Support Team</h3>
                            <p className="text-gray-600">
                                Our dedicated support team is always ready to help users with any questions 
                                or issues, ensuring everyone can make the most of our platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Innovation */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Technology & Innovation</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Advanced QR Code Technology</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    Our platform utilizes cutting-edge QR code generation algorithms that ensure 
                                    maximum reliability and compatibility across all devices and scanning applications.
                                </p>
                                <p className="leading-relaxed">
                                    We implement advanced error correction techniques that allow for extensive 
                                    customization while maintaining scan reliability, even in challenging conditions.
                                </p>
                                <p className="leading-relaxed">
                                    Our system automatically optimizes QR code parameters based on content type 
                                    and customization choices, ensuring the best possible balance between 
                                    functionality and visual appeal.
                                </p>
                                <p className="leading-relaxed">
                                    We support multiple QR code formats including standard QR codes, micro QR codes, 
                                    and custom-sized codes to meet diverse application requirements.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Security & Privacy</h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    We employ industry-standard security measures to protect user data and 
                                    ensure complete privacy. All QR code generation happens client-side when possible.
                                </p>
                                <p className="leading-relaxed">
                                    Our platform operates on secure, encrypted connections and follows strict 
                                    data protection protocols to safeguard user information.
                                </p>
                                <p className="leading-relaxed">
                                    We never store personal information or QR code content on our servers, 
                                    ensuring complete user privacy and data control.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Statistics */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
                            <p className="text-gray-600">QR Codes Generated</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                            <p className="text-gray-600">Countries Served</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                            <p className="text-gray-600">Uptime Reliability</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                            <p className="text-gray-600">Platform Availability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join millions of users who trust QRCodeHub for their QR code needs. 
                        Start creating professional QR codes today - completely free!
                    </p>
                    <Link 
                        href="/qr-generator" 
                        className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                        Create QR Code Now
                    </Link>
                </div>
            </section>

            {/* Image Section */}
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/pexels-A.png"
                        alt="QR code generator for business applications and marketing campaigns"
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/pexels-B.png"
                        alt="Free QR code scanner and mobile technology solutions"
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/pexels-C.png"
                        alt="Custom QR code creation tools and digital innovation"
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
