import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { useProgress, Html } from '@react-three/drei'
import Scene1 from './Scene1'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  )
}

const Animation = () => {
  return (
    <div className="content">
    <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <Suspense fallback={<Loader />}>
        <Scene1 />
      </Suspense>
      <ambientLight intensity={0.4} />
      </Canvas>
      </div>
  )
}

export default Animation
