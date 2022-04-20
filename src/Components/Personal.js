
const Personal = (props) => {

    const handleBack = (event) => {
        event.preventDefault();
        props.handlePrev();
    }
    const handleContinue = (event) => {
        event.preventDefault();
        props.handleNext();
    }
    const { values, handleChange } = props
    return (
        <>
            <form className='form'>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' name='fname' required value={values.fname} onChange={handleChange} />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' name='lname' required value={values.lname} onChange={handleChange} />
                <label htmlFor="">Country Of Residence</label>
                <input type="text" placeholder='Country Of Residence' name='country' v requiredalue={values.country} onChange={handleChange} />
                <label htmlFor="">Level of Education</label>
                <input type="text" placeholder='Level of Education' name='education' val requiredue={values.education} onChange={handleChange} />
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleContinue}>Next</button>
            </form>

        </>
    )
}

export default Personal