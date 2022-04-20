import React from 'react'

const Data = (props) => {

    const handleBack = (event) => {
        event.preventDefault();
        props.handlePrev();
    }
    const handleContinue = (event) => {
        event.preventDefault();
        props.handleNext();
    }
    const { values: { email, username, password, fname, lname, country, education } } = props
    return (
        <>
            <label htmlFor="">Email</label>
            <p>{email}</p>
            <label htmlFor="">Username</label>
            <p>{username}</p>
            <label htmlFor="">Password</label>
            <p>{password}</p>
            <label htmlFor="">First Name:</label>
            <p>{fname}</p>
            <label htmlFor="">Last Name</label>
            <p>{lname}</p>
            <label htmlFor="">Education</label>
            <p>{education}</p>
            <label htmlFor="">Country</label>
            <p>{country}</p>
            <button onClick={handleBack}>Previous</button>
            <button onClick={handleContinue}>Next</button>
        </>
    )
}

export default Data