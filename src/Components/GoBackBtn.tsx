import { useNavigate } from 'react-router-dom'
import { Button } from "@material-tailwind/react";

function GoBackBtn() {
  const previousPage = useNavigate(GoBackBtn)

  const handleClick = () => {
    previousPage(-1)
  }

  return (
    <div className='text-slate-100'>
      <Button variant='text' onClick={handleClick}>{'<'}Back</Button>
    </div>
  )
}

export default GoBackBtn