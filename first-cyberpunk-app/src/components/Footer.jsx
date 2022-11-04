import React from 'react'

const Footer = ({label}) => {
  return (
    <div>
      <p className="dark:text-gray-200 text-gray-700 text-center font-black">
        {label}
      </p>
    </div>
  )
}

export default Footer