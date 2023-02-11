import { Link, useNavigate } from 'react-router-dom'

function GoBackBtn() {
    const previousPage = useNavigate()

    const handleClick = () => {
      previousPage(-1)
    }

  return (
    <div>
      <button onClick = {handleClick}>Go Back</button>
    </div>
  )
}

export default GoBackBtn