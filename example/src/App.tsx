import React, { useEffect, useState } from 'react'
import { Button, Tab, Tabs, Checkbox, Radio, TextInput, SelectableCards, Card } from 'alpaca-ui'
import 'alpaca-ui/dist/index.css'

const passwordRegex = /(?=.*[\d!@#$%*()_\-+={\]};:|/])(?=.*[a-z])/;

const App = () => {
    const [activeKey, setActiveKey] = useState(2)

    const [value, setValue] = useState(null)

    const [input, setInput] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputLoading, setInputLoading] = useState(false)

    const [loadingBtn1, setLoadingBtn1] = useState(false)
    const [loadingBtn2, setLoadingBtn2] = useState(false)

    useEffect(() => {
        if (input) {
            setInputLoading(true);
            setTimeout(() => {
                setInputLoading(false);
            }, 3000);
        }
    }, [input])

    const [checked, setChecked] = useState(false)

    return (
        <div className='container mt-5'>
            <Tabs activeKey={activeKey} onClick={setActiveKey}>
                <Tab title='Button'>
                    <SelectableCards
                        className="p-24"
                        selectedValue={value}
                        onClick={setValue}
                        variant="outlined"
                    >
                        <Card
                            value={1}
                        >
                            Pilihan 1
                        </Card>
                        <Card
                            value={2}
                        >
                            Pilihan 2
                </Card>
                        <Card
                            value={3}
                        >
                            Pilihan 3
                </Card>
                    </SelectableCards>
                    <div>
                        <p>Ini Button:</p>
                        <br></br>
                        <Button className="mr-20" variant="filled">
                            Default
                </Button>
                        <Button
                            variant="filled"
                            color="primary"
                        >
                            Primary
                </Button>
                        <Button className="ml-20 " variant="filled" color="secondary">
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
                    <br></br>
                    <br></br>
                    <div>
                        <p>Loading Button:</p>
                        <br></br>
                        <Button
                            className="mr-20"
                            variant="filled"
                            color="primary"
                            loading={loadingBtn1}
                            onClick={() => {
                                setLoadingBtn1(true)
                                setTimeout(() => {
                                    setLoadingBtn1(false)
                                }, 2000);
                            }}
                        >
                            Click to show loading
                </Button>
                        <br></br>
                        <br></br>
                        <Button
                            className="mr-20"
                            color="secondary"
                            loading={loadingBtn2}
                            onClick={() => {
                                setLoadingBtn2(true)
                                setTimeout(() => {
                                    setLoadingBtn2(false)
                                }, 2000);
                            }}
                        >
                            Click to show loading
                </Button>
                    </div>
                </Tab>
                <Tab title='Icon'>
                    <div className="p-24">
                        <form className="d-flex flex-wrap">
                            <div className="mr-50">
                                <TextInput
                                    placeholder="Simple Input with placeholder"
                                />
                                <br></br>
                                <TextInput
                                    placeholder="With append.."
                                    append=".com"
                                />
                                <br></br>
                                <TextInput
                                    placeholder="With prepend.."
                                    prepend="Rp."
                                />
                                <br></br>
                                <TextInput
                                    placeholder="With prepend & append.."
                                    prepend="Rp."
                                    append=".00"
                                />
                                <br></br>
                                <TextInput
                                    value="Disabled Input"
                                    disabled
                                />
                                <br></br>
                                <TextInput
                                    password
                                    placeholder="Type password"
                                />
                                <br></br>
                                <TextInput
                                    label="With Label"
                                    placeholder="Your Input"
                                />
                                <br></br>
                                <TextInput
                                    label="With Label & Helpertext"
                                    placeholder="Your Input"
                                    helperText="Helpertext"
                                />
                                <br></br>
                                <TextInput
                                    label="Error Input"
                                    error
                                />
                                <br></br>
                                <TextInput
                                    label="Valid Input"
                                    valid
                                />
                                <br></br>
                                <TextInput
                                    label="Loading Input"
                                    loading
                                />
                                <br></br>
                                <TextInput
                                    multiline
                                    label="Multiline"
                                />
                            </div>
                            <div>
                                <h2>Testing TextInput with state and simple validation</h2>
                                <br></br>
                                <TextInput
                                    label="Label"
                                    placeholder="Your Input"
                                    value={input}
                                    valid={input.toLowerCase() === 'valid'}
                                    error={input.toLowerCase() === 'error'}
                                    loading={inputLoading}
                                    helperText={input.toLowerCase() === 'error' ? 'Your input is error' : <>Type <strong>'error'</strong> to activate error or type <strong>'valid'</strong> to activate valid</>}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <br></br>
                                <br></br>
                                <h2>Testing TextInput password with regex</h2>
                                <br></br>
                                <TextInput
                                    password
                                    label="Password"
                                    helperText={passwordRegex.test(inputPassword) ? 'Password valid' : "Password should contain at least one alphabet, one numeric"}
                                    valid={passwordRegex.test(inputPassword)}
                                    error={!passwordRegex.test(inputPassword) && inputPassword}
                                    value={inputPassword}
                                    onChange={(e) => setInputPassword(e.target.value)}
                                />
                            </div>
                        </form>
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
