import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Markdown } from './Markdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Markdown />
    </>
  )
}

export default App
