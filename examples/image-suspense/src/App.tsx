import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import image from '/image.jpg'
import image2 from '/image2.jpg'

import { ImageSuspense, SuspenseImage } from 'react-image-suspense'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={image} width={400} />
      <img src={image2} width={400} />
    </>
  )
}

export default App
