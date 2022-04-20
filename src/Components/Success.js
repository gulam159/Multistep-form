import React from 'react'

const Success = (props) => {
    const handleClose =(e)=>{
        e.preventDefault()
        
    }
  return (
      <>
    <div>You're Done</div>
    <button onClick={handleClose}>Close</button>
    </>
  )
}

export default Success