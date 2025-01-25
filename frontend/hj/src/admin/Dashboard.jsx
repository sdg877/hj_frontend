import React from 'react'
import ImageUpload from './forms/ImageUpload'
import NewsUpdate from './forms/NewsUpdate'

const Dashboard = () => {
  return (
    <>
    <div>
      <h2>Hi Heather. Welcome To Your Dashboard.</h2>
      <ImageUpload />
      <NewsUpdate />
    </div>
    </>
  )
}

export default Dashboard
