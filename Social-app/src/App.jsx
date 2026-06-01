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
        <div className="min-h-screen bg-gray-100">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="md:ml-64">
            <Header />
            <main className="pt-4 px-4 pb-8 sm:px-6 lg:px-8">
              <Routes>
                <Route path='/' element={<Postlist />} />
                <Route path='/createpost' element={<Createpost />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </PostlistProvider>



  )
}

export default App;
