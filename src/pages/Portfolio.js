import React from "react";
import Thumbnail from '../componets/Thumbnail.js'; // Import the Thumbnail component


function Portfolio(props) {


    return (

        <div>
            <h1>Denzale Houston</h1>
            <Thumbnail
                link="https://github.com/slogreco/artemis"
            />
            <Thumbnail
                link="https://github.com/Denzale/Employee-Tracker"
            />
            <Thumbnail
                link="/photoshop"
            />
        </div>
    )
}

export default Portfolio;