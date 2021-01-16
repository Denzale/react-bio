import React from "react";

function About() {

    const styles = {
        img: {
            marginBottom: "70px",
            paddingBottom: "20px",
        },

        h2: {
            paddingBottom: "10px",
            paddingTop: "20px",
        },

        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px"
        }
    }

    return (
        <>
            <div className="container" style={styles.container}>
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-white" style={styles.h2}>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img src="../src/CMhctMEx_400x400.jpg" className="img-fluid rounded-circle" style={styles.img}
                            alt="" />
                    </div>

                    <div className="col-sm-12 col-md-6 text-white">
                        <p>
                            Hello My Name Is Denzale Houston I am a Full-Stack developer certified through the University of Arizona
                            Coding Bootcamp. My technical skills include HTML 5, CSS 3,
                            Bootstrap 4, Git, GitHub, JavaScript,
                            jQuery, JSON/BSON, AJAX, REST APIs, Node.js, Express and Express-Handlebars, MySQL, Sequelize,
                            MVC, MongoDB/Mongoose and React.
                        </p>
                        <p>

                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>

            <br />
            <hr />
            <br />

        </>
    )
}

export default About;

