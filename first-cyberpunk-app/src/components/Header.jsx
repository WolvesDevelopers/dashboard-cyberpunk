import React from 'react'

const Header = ({ title, subt }) => {
  return (
    <div className="mb-10">
      <p className="text-3x1 font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
      <p className="text-lg text-gray-400">
        {subt}
      </p>
    </div>
  )
}

export default Header