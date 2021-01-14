import React from "react";
import Thumbnail from '../componets/Thumbnail.js'; // Import the Thumbnail component
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function Portfolio(props) {
    const styles = {
        h2: {
            paddingBottom: "20px",
            paddingTop: "20px",
        },

        card: {
            maxWidth: "20rem",
        },

        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px",
            paddingBottom: "50px"
        }
    }
    return (

        <div>
            <h1>Portfolio</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Thumbnail
                link="https://github.com/slogreco/artemis"
                image="http://twitter-image-url.jpg"
                title="Unleash"
                category="Website"
            />
            <Thumbnail
                link="https://github.com/Denzale/Employee-Tracker"
                image="http://airbnb-image-url.jpg>"
                title="Employee Tracker"
                category="Website"
            />

            <Thumbnail
                link="/photoshop"
                image="http://photoshop-image-url.jpg"
                title="Photoshop Redesign"
                category="Desktop App"
            />
        </div>
    )
}

export default Portfolio;