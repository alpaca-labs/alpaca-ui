import React, { useState } from 'react'

import { Button, LoadingDots, Tab, Tabs } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'

const App = () => {
    const [activeKey, setActiveKey] = useState(0)
    return (
        <div className='container mt-5'>
            <Tabs activeKey={activeKey} onClick={setActiveKey}>
                <Tab title='Apparel'>
                    <div>
                        <p>Ini Button:</p>
                        <br></br>
                        <Button className='mr-2' variant='filled'>
                            Default
                        </Button>
                        <Button className='mr-2' variant='filled' color='primary'>
                            Primary
                        </Button>
                        <Button className='mr-2' variant='filled' color='secondary'>
                            Secondary
                        </Button>
                        <br></br>
                        <br></br>
                        <Button className='mr-2'>Default</Button>
                        <Button className='mr-2' color='primary'>
                            Primary
                        </Button>
                        <Button className='mr-2' color='secondary'>
                            Secondary
                        </Button>
                        <h3>Loading</h3>
                        <LoadingDots />
                    </div>
                </Tab>
                <Tab title='Aksesoris'>tab2</Tab>
                <Tab title='Printing'>tab3</Tab>
            </Tabs>
        </div>
    )
}

export default App
