import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css";
function Hero() {
    return (
        <>
            <Jumbotron>
                <CardColumns>
                    <Card.Img variant="top" src={Quizzical_Image} />
                    <Card.Body>
                        <Card.Title className="project-title" style={{ fontWeight: "bold", fontSize: 29 }}><a href="https://magic-gathering-app.herokuapp.com/" rel="noreferrer" target="_blank">Quizzical</a></Card.Title>
                        <Card.Text>
                            A collaborative project built with three other team members. We created a full-stack web application that allows users to create quizzes, take quizzes, and track user progress for each quiz. Uses MySQL, Sequelize, express-handlebars, Node.js. Deployed with Heroku. View the <a href="https://github.com/Sltang0815/projectTwo" rel="noreferrer" target="_blank">repository here!</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={React_Directory_Image} />
                    <Card.Body>
                        <Card.Title className="project-title" style={{ fontWeight: "bold", fontSize: 29 }}><a href="https://alligatormonday.github.io/Employee_React_Directory/" rel="noreferrer" target="_blank">React Employee Directory</a></Card.Title>
                        <Card.Text>
                            React application that utilizes the Random User Generator API. This data provides an employee name, email, phone number, and picture. A user can sort employees from alphabetically, and filter an employee by name. This application utilizes React.js, Node.js, ESlint, CSS, HTML. Deployed with GitHub Pages. View the <a href="https://github.com/alligatormonday/Employee_React_Directory" rel="noreferrer" target="_blank">repository here!</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={PWA_Budget_Image} />
                    <Card.Body>
                        <Card.Title className="project-title" style={{ fontWeight: "bold", fontSize: 29 }}><a href="https://whispering-ridge-63266.herokuapp.com/" rel="noreferrer" target="_blank">PWA Budget Tracker</a></Card.Title>
                        <Card.Text>
                            PWA that lets users track their budget, add or subtract funds. If a user goes offline, then this application will still allow them to input their information. Once they return online, their input will have been saved as if it was taken in during online functionality. This application utilizes MongoDB, MongoDB Atlas, Mongoose, and Node.js. Deployed with Heroku. View the <a href="https://github.com/alligatormonday/PWA_Budget_Tracker" rel="noreferrer" target="_blank">repository here!</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={Mongoose_Fitness_Image} />
                    <Card.Body>
                        <Card.Title className="project-title" style={{ fontWeight: "bold", fontSize: 29 }}><a href="https://shrouded-reaches-87956.herokuapp.com/?id=5fd560de238e940017352d6d" rel="noreferrer" target="_blank">Mongoose Fitness Tracker</a></Card.Title>
                        <Card.Text>
                            Fitness tracker that lets users create a workout and add exercises to it. Users can add exercises to a previous workout plan, and also view their progress/stats! This application utilizes MongoDB, MongoDB Atlas, Mongoose, and Node.js. Deployed with Heroku. View the <a href="https://github.com/alligatormonday/Mongoose_Fitness" rel="noreferrer" target="_blank">repository here!</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={Burger_Express_Image} />
                    <Card.Body>
                        <Card.Title className="project-title" style={{ fontWeight: "bold", fontSize: 29 }}><a href="https://floating-plateau-77667.herokuapp.com/" rel="noreferrer" target="_blank">Burger Express Logger</a></Card.Title>
                        <Card.Text>
                            Node.js Express app, using MySQL as a database with Handlebars to serve the HTML page. When a user visits this application, they can enter a burger that they would like to eat! Then they can click the 'devour' button to eat the burger they submitted! Deployed with Heroku. View the <a href="https://github.com/alligatormonday/burger_express_logger" rel="noreferrer" target="_blank">repository here!</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={MySQL_Employee_Image} />
                    <Card.Body>
                        <Card.Title className="project-title" style={{ fontWeight: "bold", fontSize: 29 }}><a href="https://drive.google.com/file/d/1A7vlyTgxvLf7moCUhghVpJKEeEMBKIyD/view" rel="noreferrer" target="_blank">MySQL Employee Tracker</a> </Card.Title>
                        <Card.Text>
                            CLI application that allows users to manage their business. Users can view/add/remove departments, view/add/remove/update roles, view/add/remove employees. This application uses MySQL, and Node.js Checkout the demo in the above link. View the <a href="https://github.com/alligatormonday/mysql_employee_tracker" rel="noreferrer" target="_blank">repository here!</a>
                        </Card.Text>
                    </Card.Body>
                </CardColumns>
            </Jumbotron>
        </>
    );
}

export default Hero;