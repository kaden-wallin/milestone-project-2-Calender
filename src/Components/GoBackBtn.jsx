import { useNavigate } from 'react-router-dom'

function GoBackBtn() {
  const previousPage = useNavigate(GoBackBtn)

  const handleClick = () => {
    previousPage(-1)
  }

  return (
    <div className=' text-center font-bold' >
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default GoBackBtn