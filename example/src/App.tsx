import React from 'react'

import { Button, LoadingDots } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'

const App = () => {
    // const onChange = (e: any) => {
    //     console.log(e)
    // }
    return (
        <div className='container mt-5'>
            <div className='d-flex'>
            <div>
                <p>Ini Button:</p>
                <br></br>
                <Button className="mr-20" variant="filled">
                  Default
                </Button>
                <Button className="mr-20" variant="filled" color="primary">
                  Primary
                </Button>
                <Button className="mr-20" variant="filled" color="secondary">
                  Secondary
                </Button>
                <br></br>
                <br></br>
                <Button className="mr-20">
                  Default
                </Button>
                <Button className="mr-20" color="primary">
                  Primary
                </Button>
                <Button className="mr-20" color="secondary">
                  Secondary
                </Button>
              </div>
            </div>
            <h3>Loading</h3>
            <LoadingDots/>
        </div>
    )
}

export default App
