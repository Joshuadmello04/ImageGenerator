// src/pages/HomePage.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aiImage from '../utils/ai-generated-8700383_640.jpg';
import Gallery from '../components/Card';  // Import the Gallery with Card components

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const galleryRef = useRef(null);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search
    };

    const scrollToGallery = () => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${aiImage})` }}>
            <Navbar />

            {/* Hero Section - Full Viewport Height */}
            <section className="relative h-screen flex items-center">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                {/* Content Container */}
                <div className="relative container mx-auto px-4 lg:px-8 z-10 py-12 flex items-center justify-center">
                    <div className="max-w-3xl text-center">
                        {/* New Update Banner */}
                        <button
                            onClick={() => navigate('/latest-update')}
                            className="inline-flex items-center py-1 px-4 mb-8 sm:mt-8 md:mt-6 text-sm bg-indigo-900/60 backdrop-blur-sm rounded-full hover:bg-indigo-800 transition-all duration-300 border border-indigo-700"
                        >
                            <span className="bg-indigo-600 rounded-full text-white px-3 py-1 text-xs mr-3">New</span>
                            <span className="text-indigo-100">Stable Diffusion 2.0 integration live!</span>
                        </button>

                        {/* Main Heading */}
                        <h1 className="text-6xl lg:text-7xl font-extrabold mb-8 text-white leading-tight">
                            Bring Your Ideas to Life with AI
                        </h1>

                        {/* Description */}
                        <div className="space-y-6 mb-12">
                            <p className="text-xl text-indigo-100">
                                Powered by OpenAI, our AI Image Generator transforms your text prompts into breathtaking, high-quality visuals. Unleash your creativity and watch your ideas come to life like never before.
                            </p>
                            <p className="text-xl text-indigo-100">
                                Join thousands of creators who are already experiencing the power of AI in their workflow. With our easy-to-use interface and cutting-edge technology, your ideas are just a prompt away from becoming reality.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <form onSubmit={handleSearchSubmit} className="mb-12">
                            <div className="flex gap-4 max-w-2xl mx-auto">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Search for generated images..."
                                    className="flex-1 py-3 px-6 rounded-xl border-2 border-indigo-500/30 bg-white/10 backdrop-blur-sm text-white placeholder-indigo-200 focus:outline-none focus:border-indigo-500 transition-all duration-300"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => navigate('/create')}
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                            >
                                Start Creating
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button
                                onClick={() => navigate('/gallery')}
                                className="inline-flex items-center px-8 py-4 border-2 mb-6 border-indigo-400 text-white rounded-xl hover:bg-indigo-600 transition-all duration-300"
                            >
                                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Browse Gallery
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Button */}
                <button
                    onClick={scrollToGallery}
                    className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block lg:block"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

            </section>

            {/* Gallery Section */}
            <section ref={galleryRef} className="text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Explore Our AI Gallery</h2>
                    <Gallery />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
