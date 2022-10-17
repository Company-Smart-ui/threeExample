import React, { Suspense } from "react"

import {   Environment, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Model() {
  const { scene } = useGLTF("model.glb")
  return <primitive  position={[0, -0.5, 0]} object={scene} />
}
function Loader() {
  const { progress } = useProgress()
  return <Html center>{Math.round(progress) } % loaded</Html>
}

export  default function App() {
  return (
      <div style={{height:"100vh"}}>
        <Canvas   camera={ {fov: 75,  position: [0, 0, 5] ,zoom:3 } } >
          <Suspense fallback={<Loader/>}>

            <Model  />

            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>

      </div>

  )
}
