import Event from '../Event'
import { Link } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn'
import Calender from '../Calender'

function CalenderPage() {

  return (
    <div className=' bg-red-400' >
      <div >
        <GoBackBtn />
      </div>

      <div className=' bg-gray-100' >
        <Calender />
      </div>
      <div >
        <Link to='/event'>
          <Event />
        </Link>
      </div>
    </div>
  )
}

export default CalenderPage