import React from 'react';
import './Calculation.css'
const Calculation = (props) => {
    const { calculation } = props;
    const handleSum = (previous, current) => previous + current.salary;
    const total = calculation.reduce(handleSum, 0);
    return (
        <div className="cal-container">
            <h2>Total:{props.calculation.length}</h2>
            <h4>Salary total: {total}</h4>
            {
                calculation.map(cal => <li>{cal.name}</li>)
            }
        </div>
    );
};

export default Calculation;