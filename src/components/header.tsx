import React, { ReactElement } from 'react'

interface props {
  title: string,
}

function Header({title}: props){
  return (
    <div className="flex justify-center xxsm:justify-end flex-wrap p-6 bg-base-800">
      <div className="flex items center text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <h1>{title}</h1>
        </span>
      </div>
    </div>
  )
}

export default Header