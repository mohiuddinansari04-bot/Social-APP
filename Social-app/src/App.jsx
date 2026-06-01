import { useState } from 'react'
import './App.css'
import Header from '../src/Component/Header'
import Sidebar from '../src/Component/Sidebar'
import Createpost from '../src/Component/Createpost'
import Postlist from '../src/Component/Postlist'
import PostlistProvider from './Hero/poststore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [selectedTab, setSelectedTab] = useState("home")

  return (


    <PostlistProvider>
      <BrowserRouter>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Header />
        <Routes>
         
            <Route path='/' element={<Postlist />} />
            <Route path='/createpost' element={<Createpost />} />
        </Routes>
        {/* {selectedTab === "home" ? <Postlist /> : <Createpost />} */}
      </BrowserRouter>
    </PostlistProvider>



  )
}

export default App;
