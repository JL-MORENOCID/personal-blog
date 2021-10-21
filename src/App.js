import React, {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [value, updateValue] = useState([])

  return (
    <div className="App">
      <section className="App-content">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  )
}

export default App
