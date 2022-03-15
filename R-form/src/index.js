import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Preview from 'react-data-preview'
import { FormProvider } from 'react-advanced-form'
import rules from './validation-rules'
import messages from './validation-messages'
import RegistrationForm from './RegistrationForm'

class App extends React.Component {
  state = {
    serialized: null
  }

  handleSubmitStart = ({ serialized }) => {
    this.setState({ serialized })
  }

  render() {
    return (
      <FormProvider rules={rules} messages={messages}>
        <div className="flex">
          <RegistrationForm onSubmitStart={this.handleSubmitStart} />
          <Preview data={this.state.serialized} />
        </div>
      </FormProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
