import React from 'react'
import ChooseCards from '../ChooseCards'
import GoBackBtn from '../GoBackBtn'

function ChoosePage() {
  return (
    <div>
    <div>
        <ChooseCards 
            path = '/createevent'
            text = 'Create Event'
        />
        <ChooseCards 
            path='/calender'
            text = 'Calender'
        />
    </div>
    </div>
  )
}

export default ChoosePage