import React, { useState } from 'react'

import { Button, Tab, Tabs, Icon, Checkbox, Radio } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'
const { Activity, Archive } = Icon

const App = () => {
    const [activeKey, setActiveKey] = useState(0)
    const [checked, setChecked] = useState(false)

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
                    <Checkbox label="Default" />
                    <br></br>
                    <Checkbox label="Primary" color="primary" />
                    <br></br>
                    <Checkbox label="Secondary" color="secondary" />
                    <br></br>
                    <Checkbox label="Disabled" disabled />
                    <br></br>
                    <br></br>
                    <h2>Controlled checkbox:</h2>
                    <Checkbox label="Secondary" color="secondary" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <br></br>
                    <small>Statenya: {String(checked)}</small>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Radio label="Default" />
                    <br></br>
                    <Radio label="Primary" color="primary" />
                    <br></br>
                    <Radio label="Secondary" color="secondary" />
                    <br></br>
                    <Radio label="Disabled" color="primary" checked disabled />
                    <br></br>
                    <br></br>
                    <Radio name="tes" label="tes1" color="secondary" />
                    <br></br>
                    <Radio name="tes" label="tes2" color="secondary" />
                    <br></br>
                    <Radio name="tes" label="tes3" color="secondary" />
                    <br></br>
                </Tab>

            </Tabs>
        </div>
    )
}

export default App
