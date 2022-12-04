import React from "react";

function MyProjects() {
    return (
        <div>
            <section className="wrapper" id="my-projects">
                <h2>My Projects</h2>
                <div className="container">
                    
                    <a href="https://github.com/SSPENELOPE/TheBeardedReviewers" className="work-box beard">
                        <h3>Fullstack Application</h3>
                    </a>

                    <a href="https://sspenelope.github.io/Coding-Quiz/" target="_blank" rel="noreferrer" className="work-box quiz">
                        <h3><u>Coding Quiz</u> JS/Jquery</h3>
                    </a>

                    <a href="https://sspenelope.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer" className="work-box weather">
                        <h3><u>Weather Dashboard</u> JavaScript</h3>
                    </a>

                    <a href="https://github.com/SSPENELOPE/Network-API" target="_blank" rel="norefferer" className="work-box mongo">
                        <h3>MongoDB/NoSQL</h3>
                    </a>

                    <a href="https://github.com/SSPENELOPE/ecommerce-backend" target="_blank" rel="noreferrer" className="work-box backend">
                        <h3>MYSQL/JS</h3>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default MyProjects;