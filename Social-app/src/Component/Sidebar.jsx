import React from 'react'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar({ selectedTab, setSelectedTab }) {

  const handleOnclick = (tabName) => {
    setSelectedTab(tabName);
  }

  return (


    <div className="h-full w-64 bg-gray-900 text-white fixed left-0 top-0 p-5 hidden md:block">

      <h1 className="text-2xl font-bold mb-10">
        Sidebar
      </h1>

      <hr className='my-4' />

      <ul className="space-y-6 flex flex-col">

        <Link to='/'
          className={`hover:text-blue-400 cursor-pointer transition ${selectedTab === "home" ? "text-blue-400" : ""
            }`}
          onClick={() => handleOnclick("home")}
        >
          <IoIosHome className="inline-block mr-2 mb-1" />
          Home
        </Link>

        <Link to='/createPost'
          className={`hover:text-green-400 cursor-pointer transition ${selectedTab === "createpost" ? "text-green-400" : ""
            }`}
          onClick={() => handleOnclick("createpost")}
        >
          Create Post
        </Link>
      </ul>
    </div>


  )
}

export default Sidebar;