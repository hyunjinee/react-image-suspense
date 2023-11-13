import { Suspense, useState } from 'react'
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
      {/* <ImageSuspense /> */}

      {/* <Suspense fallback="loading1"> */}
      {/* <SuspenseImage src={image} width={200} /> */}
      {/* <SuspenseImage src={image} width={200} /> */}
      <SuspenseImage
        src={`https://placekitten.com/201/200?timestamp=${Date.now()}`}
        width={200}
      />
      {/* </Suspense> */}
      {/* <img src={image} width={400} /> */}
      {/* <img src={image2} width={400} /> */}
    </>
  )
}

export default App
