function Portfolio() {
    return (
        <div>
            <div>
                <h3 style={{ margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 30 }} className='sm:p-3'>Recent projects</h3>
            </div>
            <div className="max-w-md mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden lg:max-w-2xl group hover:bg-gray-400 hover:shadow-xxl hover:border-transparent ...">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="imageClass" src="\Unleash.JPG" alt="" />
                    </div>
                    <div className="p-3">
                        <div className="uppercase tracking-wide text-sm text-black-300 font-semibold">Unleash</div>
                        <a href="https://artemis-project-2.herokuapp.com/" rel='noreferrer ' target='_blank' className="block mt-1 text-lg leading-tight font-medium text-yellow-300 hover:text-black">Find Your pet a job</a>
                        <p className="mt-2 text-black group-hover:text-gray-900">
                            A full-stack web application that allows users to create and take quizzes, and track user progress for each quiz. Built with MySQL, Sequelize, express-handlebars, Node.js.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="max-w-md mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden lg:max-w-2xl group hover:bg-gray-400 hover:shadow-xxl hover:border-transparent ...">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="imageClass" src="/png-transparent-human-resource-management-system-computer-icons-employee-benefits-information-employee-of-the-month-miscellaneous-text-human-resource-management.png" alt="Screenshot of Employee React app" />
                        </div>
                        <div className="p-3">
                            <div className="uppercase tracking-wide text-sm text-black-300 font-semibold">Employee React Directory</div>
                            <a href="https://denzale.github.io/employee-react-app/" rel='noreferrer ' target='_blank' className="block mt-1 text-lg leading-tight font-medium text-yellow-300 hover:text-black">Find and sort employees!</a>
                            <p className="mt-2 text-black group-hover:text-gray-900">
                                Users can sort employees alphabetically, and filter an employee by name. Built with React.js, Node.js, ESlint, CSS, HTML, and the Random User Generator API.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="max-w-md mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden lg:max-w-2xl group hover:bg-gray-400 hover:shadow-xxl hover:border-transparent ...">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="imageClass" src="/budget.JPG" alt="Screenshot of PWA Budget Tracker app" />
                        </div>
                        <div className="p-3">
                            <div className="uppercase tracking-wide text-sm text-black-300 font-semibold">PWA Budget Tracker</div>
                            <a href="https://github.com/Denzale/Employee-Tracker" rel='noreferrer ' target='_blank' className="block mt-1 text-lg leading-tight font-medium text-yellow-300 hover:text-black">Start and track your budget!</a>
                            <p className="mt-2 text-black group-hover:text-gray-900">
                                PWA that lets users track their budget, add or subtract funds. App functionality is maintained when offline. Built with MongoDB, MongoDB Atlas, Mongoose, and Node.js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="max-w-md mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden lg:max-w-2xl group hover:bg-gray-400 hover:shadow-xxl hover:border-transparent ...">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="imageClass" src="/fitness.png" alt="Screenshot of Mongoose Fitness app" />
                        </div>
                        <div className="p-3">
                            <div className="uppercase tracking-wide text-sm text-black-300 font-semibold">Mongoose Fitness Tracker</div>
                            <a href="https://thawing-reaches-12785.herokuapp.com/" rel='noreferrer ' target='_blank' className="block mt-1 text-lg leading-tight font-medium text-yellow-300 hover:text-black">Create a workout to get started!</a>
                            <p className="mt-2 text-black group-hover:text-gray-900">
                                Users can create a workout and add exercises to it. Users can also view their progress/stats! Built with MongoDB, MongoDB Atlas, Mongoose, and Node.js. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="max-w-md mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden lg:max-w-2xl group hover:bg-gray-400 hover:shadow-xxl hover:border-transparent ...">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="imageClass" src="/burger.png" alt="Screenshot of Burger Express Logger app"   />
                        </div>
                        <div className="p-3">
                            <div className="uppercase tracking-wide text-sm text-black-300 font-semibold">Burger Express Logger</div>
                            <a href="https://github.com/Denzale/Eat-Da-Burger-" rel='noreferrer ' target='_blank' className="block mt-1 text-lg leading-tight font-medium text-yellow-300 hover:text-black">Eat a burger!</a>
                            <p className="mt-2 text-black group-hover:text-gray-900">
                                Node.js Express app, using MySQL as a database with Handlebars to serve the HTML page. Enter a burger that you would like to eat, then click the 'devour' button to eat the burger you submitted!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Portfolio;