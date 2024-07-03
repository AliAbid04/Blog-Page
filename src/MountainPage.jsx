import React from 'react';

const MountainPage = () => {
    return (
        <div className="mountain-page">
            <h2>Mountain Exploration</h2>
            <section className="introduction">
                <h2>Introduction</h2>
                <p>Mountains are some of the most awe-inspiring natural formations on Earth. From towering peaks to serene valleys, they offer a unique blend of adventure and tranquility. Whether you're an experienced mountaineer or a casual hiker, there's always something new to discover in the mountains.</p>
            </section>
            
            <section className="popular-mountains">
                <h2>Popular Mountain Ranges</h2>
                <div className="mountain-range">
                    <h3>The Himalayas</h3>
                    <p>The Himalayas are home to the world's highest peaks, including Mount Everest. These mountains are known for their challenging climbs, stunning landscapes, and rich cultural heritage.</p>
                </div>
                <div className="mountain-range">
                    <h3>The Rockies</h3>
                    <p>The Rocky Mountains stretch from Canada to New Mexico, offering a wide range of outdoor activities such as skiing, hiking, and wildlife viewing. The Rockies are known for their breathtaking scenery and diverse ecosystems.</p>
                </div>
                <div className="mountain-range">
                    <h3>The Alps</h3>
                    <p>The Alps are a major mountain range in Europe, known for their picturesque villages, excellent skiing resorts, and challenging hiking trails. They are a popular destination for tourists from around the world.</p>
                </div>
            </section>

            <section className="mountain-activities">
                <h2>Activities</h2>
                <div className="activity">
                    <h3>Hiking</h3>
                    <p>Hiking is one of the most popular activities in the mountains. Trails range from easy walks to strenuous multi-day treks. Regardless of your skill level, hiking offers a great way to explore and enjoy the natural beauty of the mountains.</p>
                </div>
                <div className="activity">
                    <h3>Climbing</h3>
                    <p>Mountain climbing is a challenging but rewarding activity. It requires physical fitness, technical skills, and proper equipment. From rock climbing to ice climbing, there are various types of climbs to suit different preferences and experience levels.</p>
                </div>
                <div className="activity">
                    <h3>Skiing and Snowboarding</h3>
                    <p>During the winter, mountains transform into popular skiing and snowboarding destinations. With a variety of slopes and resorts, they offer fun and excitement for both beginners and seasoned enthusiasts.</p>
                </div>
            </section>

            <section className="safety-tips">
                <h2>Safety Tips</h2>
                <p>Exploring the mountains can be exhilarating, but it's important to stay safe. Here are some tips to keep in mind:</p>
                <ul>
                    <li>Always check the weather forecast before heading out.</li>
                    <li>Carry enough water, food, and appropriate clothing.</li>
                    <li>Let someone know your plans and estimated return time.</li>
                    <li>Be aware of your surroundings and potential hazards.</li>
                    <li>Carry a map, compass, or GPS device.</li>
                </ul>
            </section>
        </div>
    );
}

export default MountainPage;
