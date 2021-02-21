import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About this App</h1>
            <p className="my-1 text-bold">
                This is a full stack MERN Application used for keeping and managing the contacts.
            </p>
            <p className="bg-dark p"><strong>Version: </strong> <span className="text-success">1.2.2</span></p> 
            <p className="my-1">To know more about developer, <span className="text-bold text-success"><a href="https://ihimansh.herokuapp.com" target="_blank" rel="noreferrer">Click here</a></span></p>
        </div>
    )
}

export default About;
