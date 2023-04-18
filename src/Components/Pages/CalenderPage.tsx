import Event from '../Event'
import { Link } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn'
import Calender from '../Calender'

function CalenderPage(): JSX.Element {

  return (
    <div >
      <div >
        <GoBackBtn />
      </div>
      <div className=' bg-gray-100' >
        <Calender />
      </div>
    </div>
  )
}

export default CalenderPage