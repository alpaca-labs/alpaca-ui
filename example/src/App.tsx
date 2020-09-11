import React from 'react'

import { Button } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'

const App = () => {
    const onChange = (e: any) => {
        console.log(e)
    }
    return (
        <div className='container mt-5'>
            <div className='d-flex'>
                <div className='mr-2'>
                    <Button title='Primary' onChange={(e) => onChange(e)}>
                        <p>asdasd</p>
                    </Button>
                </div>
                <div className='mr-2'>
                    <Button color='info'>Toto</Button>
                </div>
            </div>
        </div>
    )
}

export default App
