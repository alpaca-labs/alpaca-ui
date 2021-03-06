import React, { useEffect, useState } from 'react'
import { Button, Tab, Tabs, Checkbox, Radio, TextInput, Card, SelectableCards, RadioGroup } from 'alpaca-ui'
import './example-main.scss'

const passwordRegex = /(?=.*[\d!@#$%*()_\-+={\]};:|/])(?=.*[a-z])/;

const App = () => {
  //main tabs
  const [activeKey, setActiveKey] = useState(2)

  //tabs form
  const [activeKeyForm, setActiveKeyForm] = useState(2)

  const [input, setInput] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputLoading, setInputLoading] = useState(false)

  const [cardValue, setCardValue] = useState(null)

  const [loadingBtn1, setLoadingBtn1] = useState(false)
  const [loadingBtn2, setLoadingBtn2] = useState(false)
  const [loadingBtn3, setLoadingBtn3] = useState(false)

  const [radioGroupValue, setRadioGroupValue] = useState('')

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
    <div className="p-24">
      <Tabs activeKey={activeKey} onClick={setActiveKey}>
        <Tab title='Button'>
          <div className="p-24">
            <h3>No Variant</h3>
            <br></br>
            <Button className="mr-20">Default</Button>
            <Button className="mr-20" color="primary">Primary</Button>
            <Button className="mr-20" color="secondary">Secondary</Button>
            <Button className="mr-20" color="danger">Danger</Button>
            <Button className="mr-20" color="warning">Warning</Button>
            <Button className="mr-20" color="success">Success</Button>
            <br></br>
            <br></br>
            <h3>Variant Outlined</h3>
            <br></br>
            <Button className="mr-20" variant="outlined">Default</Button>
            <Button className="mr-20" variant="outlined" color="primary">Primary</Button>
            <Button className="mr-20" variant="outlined" color="secondary">Secondary</Button>
            <Button className="mr-20" variant="outlined" color="danger">Danger</Button>
            <Button className="mr-20" variant="outlined" color="warning">Warning</Button>
            <Button className="mr-20" variant="outlined" color="success">Success</Button>
            <br></br>
            <br></br>
            <h3>Variant Filled</h3>
            <br></br>
            <Button className="mr-20" variant="filled">Default</Button>
            <Button className="mr-20" variant="filled" color="primary">Primary</Button>
            <Button className="mr-20" variant="filled" color="secondary">Secondary</Button>
            <Button className="mr-20" variant="filled" color="danger">Danger</Button>
            <Button className="mr-20" variant="filled" color="warning">Warning</Button>
            <Button className="mr-20" variant="filled" color="success">Success</Button>
            <br></br>
            <br></br>
            <h3>With Loading</h3>
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
            <br></br>
            <br></br>
            <Button
              className="mr-20"
              color="danger"
              variant="outlined"
              loading={loadingBtn3}
              onClick={() => {
                setLoadingBtn3(true)
                setTimeout(() => {
                  setLoadingBtn3(false)
                }, 2000);
              }}
            >
              Click to show loading
            </Button>
          </div>
        </Tab>
        <Tab title='Card'>
          <div className="p-24">
            <h3>No Variant</h3>
            <br></br>
            <Card>
              Simple Card
            </Card>
            <br></br>
            <br></br>
            <h3>Variant Outlined</h3>
            <br></br>
            <Card variant="outlined">
              Simple Card
            </Card>
            <br></br>
            <br></br>
            <h3>Selectable Cards</h3>
            <br></br>
            <SelectableCards
              selectedValue={cardValue}
              onClick={setCardValue}
              variant="outlined"
            >
              <Card value={'Pilihan 1'}>Pilihan 1</Card>
              <Card value={'Pilihan 2'}>Pilihan 2</Card>
              <Card value={'Pilihan 3'}>Pilihan 3</Card>
            </SelectableCards>
            <br></br>
            <small>Selected Value: {cardValue}</small>
          </div>
        </Tab>
        <Tab title='Form'>
          <div className="p-24">
            <Card>
              <Tabs activeKey={activeKeyForm} onClick={setActiveKeyForm}>
                <Tab title="TextInput">
                  <div className="p-24">
                    <form className="d-flex flex-wrap">
                      <div className="mr-50">
                        <TextInput placeholder="Simple Input with placeholder" />
                        <br></br>
                        <TextInput placeholder="With append.." append=".com" />
                        <br></br>
                        <TextInput placeholder="With prepend.." prepend="Rp." />
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
                <Tab title="Checkbox">
                  <div className="p-24">
                    <Checkbox label="Default" />
                    <br></br>
                    <Checkbox label="Primary" color="primary" />
                    <br></br>
                    <Checkbox label="Secondary" color="secondary" />
                    <br></br>
                    <Checkbox label="Danger" color="danger" />
                    <br></br>
                    <Checkbox label="Warning" color="warning" />
                    <br></br>
                    <Checkbox label="Success" color="success" />
                    <br></br>
                    <Checkbox label="Disabled" disabled />
                    <br></br>
                    <br></br>
                    <h2>Controlled checkbox:</h2>
                    <Checkbox label="Secondary" color="secondary" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <br></br>
                    <small>Statenya: {String(checked)}</small>
                  </div>
                </Tab>
                <Tab title="Radio">
                  <div className="p-24">
                    <Radio label="Default" />
                    <br></br>
                    <Radio label="Primary" color="primary" />
                    <br></br>
                    <Radio label="Secondary" color="secondary" />
                    <br></br>
                    <Radio label="Danger" color="danger" />
                    <br></br>
                    <Radio label="Warning" color="warning" />
                    <br></br>
                    <Radio label="Success" color="success" />
                    <br></br>
                    <Radio label="Disabled" color="primary" checked disabled />
                    <br></br>
                    <br></br>
                    <RadioGroup label="Radio Group">
                      <Radio value="tes1" label="tes1" color="primary" />
                      <Radio value="tes2" label="tes2" color="primary" />
                      <Radio value="tes3" label="tes3" color="primary" />
                    </RadioGroup>
                    <br></br>
                    <br></br>
                    <RadioGroup row label="Radio Group Row">
                      <Radio value="tes1" label="tes1" color="secondary" />
                      <Radio value="tes2" label="tes2" color="secondary" />
                      <Radio value="tes3" label="tes3" color="secondary" />
                    </RadioGroup>
                    <br></br>
                    <br></br>
                    <RadioGroup row label="Radio Group with Default Value" defaultValue="tes1">
                      <Radio value="tes1" label="tes1" color="success" />
                      <Radio value="tes2" label="tes2" color="success" />
                      <Radio value="tes3" label="tes3" color="success" />
                    </RadioGroup>
                    <br></br>
                    <br></br>
                    <RadioGroup row name="tes" label="Controlled Radio Group" value={radioGroupValue} onChange={(e) => setRadioGroupValue(e.target.value)}>
                      <Radio value="tes1" label="tes1" color="warning" />
                      <Radio value="tes2" label="tes2" color="warning" />
                      <Radio value="tes3" label="tes3" color="warning" />
                    </RadioGroup>
                    <br></br>
                    <small>Statenya: {String(radioGroupValue)}</small>
                  </div>
                </Tab>
              </Tabs>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
