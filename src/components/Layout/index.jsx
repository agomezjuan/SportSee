import './index.sass'

const Layout = ({children}) => {
  return (
    <main className='main-container'>
        {children}
    </main>
  )
}

export default Layout