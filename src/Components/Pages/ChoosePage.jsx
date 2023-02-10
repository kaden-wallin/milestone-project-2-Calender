import React from 'react'
import ChooseCards from '../ChooseCards'

function ChoosePage() {
  return (
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
  )
}

export default ChoosePage