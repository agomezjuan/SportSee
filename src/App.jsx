import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Layout from './components/Layout'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Layout>
        <Menu />
      </Layout>
    </div>
  )
}

export default App
