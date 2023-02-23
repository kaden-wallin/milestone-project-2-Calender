import ChooseCards from '../ChooseCards'


function ChoosePage() {
  return (
    <div className="flex flex-row space-x-9 justify-center items-center container mx-auto px-4 bg-red-600" >
      
    <div className='flex justify-center items-center my-20 border-slate-50 pt-5 '>
        <ChooseCards 
            path = '/createevent'
            text = ' Create Event'
            description = 'Create your own event and begin your journey in meeting new people.'
            image = '../images/formImage.png'
        />
      </div>
      <div className='flex justify-center items-center my-20 border-slate-50 pt-5'>
        <ChooseCards 
            path = '/calender'
            text = 'Calender'
            description = 'View other events for you to attend and explore'
            image = '../images/calender.png'
        />
    </div>
    </div>
  )
}

export default ChoosePage