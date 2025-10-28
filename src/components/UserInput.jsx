import React, { useState } from 'react';

const UserInput = ({ onChange, userInput }) => {
    return (
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <lable> Ininital invesment </lable>
                    <input type='number' required value={userInput.initalInvesment} onChange={(event) => onChange("initalInvesment", event.target.value)} />
                </p>
                <p>
                    <lable> Annual invesment </lable>
                    <input type='number' required value={userInput.annualInvesment} onChange={(event) => onChange("annualInvesment", event.target.value)} />
                </p>
            </div>

            <div className='input-group'>
                <p>
                    <lable> Expected invesment </lable>
                    <input type='number' required value={userInput.expectedReturn} onChange={(event) => onChange("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <lable> Duration </lable>
                    <input type='number' required value={userInput.duration} onChange={(event) => onChange("duration", event.target.value)} />
                </p>
            </div>
        </section>
    )
}

export default UserInput