import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Layout from './components/Layout'
import Menu from './components/Menu'
import MainSection from './components/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Layout>
        <Menu />
        <MainSection />
      </Layout>
    </div>
  )
}

export default App
