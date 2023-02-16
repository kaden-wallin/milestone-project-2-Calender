import Event from '../Event'
import { Link } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn'
import Calender from '../Calender'

function CalenderPage() {

  return (
    <div >
        <div className=' '>
        <GoBackBtn />
        </div>
        
        <div className=' ' >
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