import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function GoBackBtn() {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate(-1)
    }

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default GoBackBtn