import React from 'react';
import './Person.css'
const Person = (props) => {
    // console.log(props.member);
    const { name, profession, salary, img, schoolName, registrationId } = props.member;
    return (
        <div className="person-container">
            <div className="person-details">
                <img src={img} alt="" />
                <h4>Name: {name}</h4>
                <h5>ID: {registrationId}</h5>
                <h5>Profession: {profession}</h5>
                <p>Salary: {salary}</p>
                <p>School: {schoolName}</p>
                <button
                    onClick={() => props.handleCalculation(props.member)}
                ><i class="fas fa-shopping-cart"></i> add salary</button>
                <br />
                <div className="fontawesome">
                    <i class="fab fa-facebook-square fa-2x"></i>
                    <i class="fab fa-twitter fa-2x"></i>
                </div>
            </div>
        </div>
    );
};

export default Person;