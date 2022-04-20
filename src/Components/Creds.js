const Creds = (props) => {
    const handleContinue = (event) => {
        event.preventDefault();
        props.handleNext();
    }


    const { values } = props
    return (
        <>

            <form className='form'>
                <label htmlFor="">Email Address</label>
                <input type="email" placeholder='E-mail' name='email' required value={values.email} onChange={props.handleChange} />
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Username' name='username' required value={values.username} onChange={props.handleChange} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' name='password' required value={values.password} onChange={props.handleChange} />
                <button onClick={handleContinue}>Next</button>
            </form>



        </>
    )
}

export default Creds