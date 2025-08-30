import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer } from 'react-toastify';
import Routers from './Routers/Routers';
import { useState } from 'react';

const App = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='px-4  sm:px-[5vw] md:px-[7vw] lg-px-[9vw]'>
      <ToastContainer />
      <Navbar
        setShowSearch={setShowSearch}
        showSearch={showSearch} />
      <SearchBar
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <Routers />
      <Footer />
    </div>
  )
}

export default App

