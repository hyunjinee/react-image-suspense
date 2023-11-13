import { Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import image from '/image.jpg'
import image2 from '/image2.jpg'

import { ImageSuspense, SuspenseImage, Image } from 'react-image-suspense'
import { Link } from './components/Link'
import { ExampleInput } from './components/ExampleInput'
import { ImageFallback } from './components/ImageFallback'
import { Fallback } from './components/Fallback'

function App() {
  return (
    <>
      <ImageFallback />
      <Suspense fallback={<Fallback />}>
        <div style={{ width: '300px' }}>
          <ExampleInput />
        </div>
      </Suspense>
    </>
  )
}

export default App
