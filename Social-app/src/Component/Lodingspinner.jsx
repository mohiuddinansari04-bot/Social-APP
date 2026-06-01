import React from 'react'

function Lodingspinner() {
  return (
    <center>
      <div className="flex justify-center items-center h-screen">
        <div className="w-15 h-15 font-bold border-4 border-black border-t-transparent rounded-full animate-spin">
        </div>
      </div>
    </center>
  )
}

export default Lodingspinner;