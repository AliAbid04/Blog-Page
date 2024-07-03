import React from 'react';

const BeachPage = () => {
    return (
        <div className="beach-page">
            <h1>Beach Getaways</h1>
            <section className="introduction">
                <h2>Introduction</h2>
                <p>Beaches are synonymous with relaxation and adventure. From sunbathing on golden sands to exploring underwater wonders, beaches offer a perfect escape from the daily grind. Whether you prefer a quiet retreat or an action-packed vacation, there's a beach destination for everyone.</p>
            </section>
            
            <section className="popular-beaches">
                <h2>Popular Beaches</h2>
                <div className="beach">
                    <h3>Maldives</h3>
                    <p>The Maldives is renowned for its crystal-clear waters, white sandy beaches, and luxurious resorts. It's a top destination for snorkeling, diving, and getaways.</p>
                </div>
                <div className="beach">
                    <h3>Bora Bora</h3>
                    <p>Bora Bora, located in French Polynesia, is famous for its stunning turquoise lagoon and overwater bungalows. It's an ideal spot for water sports, relaxation, and other activities.</p>
                </div>
                <div className="beach">
                    <h3>Maui</h3>
                    <p>Maui, one of the Hawaiian Islands, offers diverse beach experiences from the golden sands of Ka'anapali Beach to the black sands of Waianapanapa State Park. Visitors can enjoy surfing, snorkeling, and whale watching.</p>
                </div>
            </section>

            <section className="beach-activities">
                <h2>Activities</h2>
                <div className="activity">
                    <h3>Swimming</h3>
                    <p>Swimming in the ocean is a refreshing way to cool off and enjoy the natural beauty of the beach. Many beaches offer calm waters perfect for a leisurely swim.</p>
                </div>
                <div className="activity">
                    <h3>Surfing</h3>
                    <p>Surfing is a popular activity at many beach destinations. Whether you're a beginner or an experienced surfer, there are waves for all skill levels. Lessons and rentals are often available.</p>
                </div>
                <div className="activity">
                    <h3>Snorkeling and Diving</h3>
                    <p>Exploring the underwater world is a must-do at many beach destinations. Snorkeling and diving allow you to see vibrant coral reefs, colorful fish, and other marine life up close.</p>
                </div>
            </section>

            <section className="safety-tips">
                <h2>Safety Tips</h2>
                <p>Enjoying the beach safely is important. Here are some tips to keep in mind:</p>
                <ul>
                    <li>Always swim in designated areas and follow lifeguard instructions.</li>
                    <li>Stay hydrated and apply sunscreen regularly.</li>
                    <li>Be aware of ocean currents and tides.</li>
                    <li>Never swim alone and keep an eye on children.</li>
                    <li>Respect marine life and coral reefs.</li>
                </ul>
            </section>
        </div>
    );
}

export default BeachPage;
