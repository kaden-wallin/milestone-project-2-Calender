import {useNavigate}  from 'react-router-dom'
import { Button } from "@material-tailwind/react";

function GoBackBtn() {
    const previousPage = useNavigate(GoBackBtn)

    const handleClick = () => {
      previousPage(-1)
    }

  return (
    <div className=''>
      <Button variant='text' onClick = {handleClick}>Return</Button>
    </div>
  )
}

export default GoBackBtn