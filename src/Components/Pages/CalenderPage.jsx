import Event from '../Event'
import { Link } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn'
import Calender from '../Calender'

function CalenderPage() {

  return (
    <div >
        <div className=' bg-blue-200'>
        <GoBackBtn />
        </div>
        
        <div className=' bg-red-600' >
            <Calender />
        </div>
        <div >
            <Link to = '/event'>
              <Event />
            </Link>
        </div>
    </div>
  )
}

export default CalenderPage