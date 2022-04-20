import React from 'react'
import Creds from './Creds'
import Personal from './Personal'
import Data from './Data'
import Success from './Success'
import { useState } from 'react'
const Form = () => {
    const [input, setInput] = useState({
        step: 1,
        email: '',
        username: '',
        password: '',
        fname: '',
        lname: '',
        country: '',
        education: ''
    })

    const handleNext = () => {
        const { step } = input;
        setInput({
            step: step + 1
        })
    }

    const handlePrev = () => {
        const { step } = input;
        setInput({
            step: step - 1
        })
    }

    const handleChange = (data,event)=>{
        setInput({[data]:event.target.value})
    }
    // const handleChange = ( event) => {
    //     setInput({...input ,[event.target.name]: event.target.value })
    // }

    const { step } = input;
    const { email,username,password,fname,lname,country,education} = input;
    const values = {email,username,password,fname,lname,country,education}
    // const values = {...input.data}
    
    switch (step) {
        case 1: return(
            <Creds
            handleNext ={handleNext}
            handleChange = {handleChange}
            values={values}
             />
        )
        case 2: return(
            <Personal
            handleNext ={handleNext}
            handlePrev = {handlePrev}
            handleChange = {handleChange}
            values={values}
             />
        )
        case 3: return(
            <Data
            handleNext ={handleNext}
            handlePrev = {handlePrev}
            values={values}
             />
        )
        case 4: return(
            <Success />
        )
            
    }
}

export default Form