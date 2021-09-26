import React from 'react';
import { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Person from '../Person/Person';
import './Member.css'

const Member = () => {
    const [members, setMember] = useState([]);
    const [calculation, setCalculation] = useState([]);
    useEffect(() => {
        fetch('./name.JSON')
            .then(res => res.json())
            .then(data => setMember(data));
    }, [])
    const handleCalculation = person => {
        const newCal = [...calculation, person];
        setCalculation(newCal);
    }

    return (
        <div className="member-container">
            <div className="member-details" >
                {
                    members.map(member => <Person
                        key={member.registrationId}
                        member={member}
                        handleCalculation={handleCalculation}
                    ></Person>)
                }
            </div>
            <div>
                <Calculation calculation={calculation}></Calculation>
            </div>
        </div>
    );
};

export default Member;