import ChooseCards from '../ChooseCards'


function ChoosePage() {
  return (
    <div class="container mx-auto my-4 px-4 bg-cyan-400" >
      
    <div className='flex justify-center items-center border border-slate-50 pt-5 '>
        <ChooseCards 
            path = '/createevent'
            text = ' Create Event'
        />
      </div>
        <br></br>
      <div className='flex justify-center items-center border border-slate-50 pb-5'>
        <ChooseCards 
            path = '/calender'
            text = 'Calender'
        />
    </div>
    </div>
  )
}

export default ChoosePage