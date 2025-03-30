import React from 'react'

const InfoBox = ({ title, content }) => {

  return (
    <div className='border-1 border-white/25 p-6 w-[100%]'>
        <p className='body uppercase'>{title}</p>
        <h2 className='h2'>{content}</h2>
    </div>
  )
}

export default InfoBox