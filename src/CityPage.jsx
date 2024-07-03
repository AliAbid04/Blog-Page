import React from 'react';

const CityPage = () => {
    return (
        <div className="city-page">
            <h1>City Adventures</h1>
            <section className="introduction">
                <h2>Introduction</h2>
                <p>Cities are vibrant hubs of culture, history, and innovation. From towering skyscrapers to historic landmarks, cities offer a diverse range of experiences. Whether you're exploring local cuisine, visiting museums, or enjoying nightlife, there's always something new to discover in the city.</p>
            </section>
            
            <section className="popular-cities">
                <h2>Popular Cities</h2>
                <div className="city">
                    <h3>New York City</h3>
                    <p>Known as "The Big Apple," New York City is famous for its iconic landmarks like the Statue of Liberty, Times Square, and Central Park. It's a melting pot of cultures, offering world-class dining, entertainment, and shopping.</p>
                </div>
                <div className="city">
                    <h3>Paris</h3>
                    <p>Paris, the capital of France, is known for its romantic ambiance, stunning architecture, and rich history. Key attractions include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. The city is also renowned for its fashion and cuisine.</p>
                </div>
                <div className="city">
                    <h3>Tokyo</h3>
                    <p>Tokyo, Japan's bustling capital, blends the ultra-modern with the traditional. Visitors can experience cutting-edge technology, bustling markets, ancient temples, and exquisite cuisine. Must-see spots include Shibuya Crossing, Tokyo Tower, and the historic Asakusa district. Tokyo is also a paradise for anime enthusiasts, with neighborhoods like Akihabara offering a plethora of anime shops, themed cafes, and events celebrating Japanese pop culture.</p>
                </div>
            </section>

            <section className="city-activities">
                <h2>Activities</h2>
                <div className="activity">
                    <h3>Exploring Landmarks</h3>
                    <p>Every city has its iconic landmarks that define its character and history. Visiting these sites offers insight into the city's past and present, as well as stunning photo opportunities.</p>
                </div>
                <div className="activity">
                    <h3>Enjoying Local Cuisine</h3>
                    <p>Food is a major part of any city's culture. From street food to Michelin-starred restaurants, exploring local cuisine is a delicious way to experience a city's unique flavors and culinary traditions.</p>
                </div>
                <div className="activity">
                    <h3>Shopping</h3>
                    <p>Cities are often shopping havens, with everything from luxury boutiques to bustling markets. Whether you're looking for high fashion, souvenirs, or unique local products, there's something for every shopper.</p>
                </div>
            </section>

            <section className="safety-tips">
                <h2>Safety Tips</h2>
                <p>Staying safe while exploring a city is crucial. Here are some tips to keep in mind:</p>
                <ul>
                    <li>Stay aware of your surroundings and keep an eye on your belongings.</li>
                    <li>Use reliable transportation options and avoid poorly lit areas at night.</li>
                    <li>Keep copies of important documents and emergency contacts.</li>
                    <li>Respect local customs and laws.</li>
                    <li>Stay informed about the city's safety guidelines and protocols.</li>
                </ul>
            </section>
        </div>
    );
}

export default CityPage;
