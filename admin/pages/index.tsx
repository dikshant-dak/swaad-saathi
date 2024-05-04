import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const index = () => {
  return (
    <div className="app">
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default index
