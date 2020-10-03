import React, { useState } from 'react'

import { Button, LoadingDots, Tab, Tabs, Icon, Checkbox } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'
const { Activity, Archive } = Icon

const App = () => {
    const [activeKey, setActiveKey] = useState(0)
    return (
        <div className='container mt-5'>
            <Tabs activeKey={activeKey} onClick={setActiveKey}>
                <Tab title='Button'>
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
                    </div>
                </Tab>
                <Tab title='Icon'>
                    <div>
                        <Activity />
                        <Archive />
                    </div>
                </Tab>
                <Tab title='Loading'>
                    <h3>Loading</h3>
                    <LoadingDots />
                    <Checkbox />
                    <Checkbox color="primary" />
                    <Checkbox color="secondary" />
                </Tab>

            </Tabs>
        </div>
    )
}

export default App
