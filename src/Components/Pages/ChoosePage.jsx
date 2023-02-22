import ChooseCards from '../ChooseCards'


function ChoosePage() {
  return (
    <div >
    <div className= 'items-center justify-center rounded-md text-center t bg-red-400 text-2xl'>
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