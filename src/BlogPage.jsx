import React, { useState } from 'react';
import MountainPage from './MountainPage';
import CityPage from './CityPage';
import BeachPage from './BeachPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleMountainClick = () => setCurrentPage('mountains');
    const handleCityClick = () => setCurrentPage('city');
    const handleBeachClick = () => setCurrentPage('beach');
    const handleHomeClick = () => setCurrentPage('home');
    const handleAboutClick = () => setCurrentPage('about');
    const handleContactClick = () => setCurrentPage('contact');

    return (
        <div className="blog-container">
            <header className="blog-header">
                <h1 className="blog-title">Exploration Echoes</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
                        <li><a href="#about" onClick={handleAboutClick}>About</a></li>
                        <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="blog-content">
                {currentPage === 'home' && (
                    <div className="home-content">
                        {/* Mountains Section */}
                        <section className="blog-post">
                            <h2>Explore Mountains</h2>
                            <div className="image-row">
                                <button className="image-link" onClick={handleMountainClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/m1.jpg" alt="Mountains" className="blog-image" />
                                </button>
                                <button className="image-link" onClick={handleMountainClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/m2.jpg" alt="Mountains" className="blog-image" />
                                </button>
                                <button className="image-link" onClick={handleMountainClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/m3.jpg" alt="Mountains" className="blog-image" />
                                </button>
                            </div>
                            <p>Explore the breathtaking mountains and immerse yourself in the serene beauty of nature, where every trail leads to stunning vistas, hidden waterfalls, and unforgettable adventures.</p>
                            <p>Click on the Image to Learn More</p>
                        </section>

                        {/* City Adventures Section */}
                        <section className="blog-post">
                            <br></br>
                            <h2>City Adventures</h2>
                            <div className="image-row">
                                <button className="image-link" onClick={handleCityClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/c1.jpg" alt="City" className="blog-image" />
                                </button>
                                <button className="image-link" onClick={handleCityClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/c2.jpg" alt="City" className="blog-image" />
                                </button>
                                <button className="image-link" onClick={handleCityClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/c3.jpg" alt="City" className="blog-image" />
                                </button>
                            </div>
                            <p>Discover the hidden gems of the city, from local cuisine to bustling markets.</p>
                            <p>Click on the Image to Learn More</p>
                        </section>

                        {/* Beach Getaways Section */}
                        <section className="blog-post">
                            <br></br>
                            <h2>Beach Getaways</h2>
                            <div className="image-row">
                                <button className="image-link" onClick={handleBeachClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/b1.jpg" alt="Beach" className="blog-image" />
                                </button>
                                <button className="image-link" onClick={handleBeachClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/b2.jpg" alt="Beach" className="blog-image" />
                                </button>
                                <button className="image-link" onClick={handleBeachClick} style={{ border: 'none', padding: 0 }}>
                                    <img src="/src/assets/b3.jpg" alt="Beach" className="blog-image" />
                                </button>
                            </div>
                            <p>Relax and unwind on some of the world's most beautiful beaches, where the golden sands meet crystal-clear waters, offering a perfect escape from the hustle and bustle of everyday life.</p>
                            <p>Click on the Image to Learn More</p>
                        </section>
                    </div>
                )}

                {currentPage === 'mountains' && (
                    <section className="blog-post">
                        <MountainPage />
                    </section>
                )}

                {currentPage === 'city' && (
                    <section className="blog-post">
                        <CityPage />
                    </section>
                )}

                {currentPage === 'beach' && (
                    <section className="blog-post">
                        <BeachPage />
                    </section>
                )}

                {currentPage === 'about' && (
                    <section className="blog-post">
                        <AboutPage />
                    </section>
                )}

                {currentPage === 'contact' && (
                    <section className="blog-post">
                        <ContactPage />
                    </section>
                )}
            </main>
            <footer className="blog-footer">
                <p>&copy; 2024 Exploration Echoes. All rights reserved. &nbsp; Privacy Policy. &nbsp; Terms of Service.</p>
            </footer>
        </div>
    );
}

export default BlogPage;
