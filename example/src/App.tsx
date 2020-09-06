import React from 'react'

import { Button } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'

const App = () => {
  return (
    <div className='container mt-5'>
      <div className='d-flex'>
        <div className='mr-2'>
          <Button title='Primary'></Button>
        </div>
        <div className='mr-2'>
          <Button color='info' title='Info' />
        </div>
      </div>
    </div>
  )
}

export default App
