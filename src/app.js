import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Freddies website</h1>
        <hr />
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
