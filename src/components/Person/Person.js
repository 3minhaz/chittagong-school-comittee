import React from 'react';
import './Person.css'
const Person = (props) => {
    const { name, profession, salary, img, schoolName, registrationId, age } = props.member;
    return (
        // cart items added here
        <div className="person-container">
            <div className="person-details">
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>ID: {registrationId}</h4>
                <h4>Age: {age}</h4>
                <h5>Profession: {profession}</h5>
                <p>Salary: {salary}</p>
                <p>School: {schoolName}</p>
                <button
                    onClick={() => props.handleCalculation(props.member)}
                ><i className="fas fa-shopping-cart"></i>  Add Salary</button>
                <br />
                {/* social media icons */}
                <div className="fontawesome">
                    <i className="fab fa-facebook-square fa-2x"></i>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
            </div>
        </div>
    );
};

export default Person;