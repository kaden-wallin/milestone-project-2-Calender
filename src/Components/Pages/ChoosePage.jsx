import ChooseCards from '../ChooseCards'


function ChoosePage() {
  return (
    <div >
    <div className=' bg-green-500'>
        <ChooseCards 
            path = '/createevent'
            text = ' Create Event'
        />
        <ChooseCards 
            path = '/calender'
            text = 'Calender'
        />
    </div>
    </div>
  )
}

export default ChoosePage