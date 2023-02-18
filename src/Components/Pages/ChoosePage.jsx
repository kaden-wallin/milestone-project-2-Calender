import ChooseCards from '../ChooseCards'


function ChoosePage() {
  return (
    <div className=' text-center font-bold'>
      <div >
        <ChooseCards
          path='/createevent'
          text=' Create Event'
        />
        <ChooseCards
          path='/calender'
          text='Calender'
        />
      </div>
    </div>
  )
}

export default ChoosePage