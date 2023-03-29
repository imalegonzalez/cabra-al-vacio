import * as THREE from 'three'
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GizmoHelper, GizmoViewport, OrbitControls, PivotControls, SpotLight, SpotLightShadow, TransformControls, Center, Float, Text, Html } from '@react-three/drei';
import { Goat } from './Goat';
import { Lights } from './Lights';
import { Depth, Fresnel, LayerMaterial, Noise } from 'lamina';
import { Suspense, useMemo, useRef } from 'react';






function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 10 }}>
      <OrbitControls makeDefault />
      <Bg />
      <Suspense fallback={null}>
        <Goat />
        <Caption>{`LA CABRA\nAL VACIO\n`}</Caption>
        
        
        <Rig/>
      </Suspense>
      <ambientLight intensity={1}/>
      
      
      
     
      
      
    </Canvas>
  );
}

export default App;

function Caption({ children }) {
  const { width , height } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -3]}
      lineHeight={0.9}
      font="/Merriweather-Black.ttf"
      fontSize={width / 6}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}


function CaptionBold({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[-1, -.5, -5]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 10}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

function Bg() {
  const fondo = useRef()
  useFrame(({ clock }) => {
    fondo.current.rotation.x = clock.getElapsedTime()/10
    fondo.current.rotation.y = clock.getElapsedTime()/10
  })
  return (
    
    <mesh ref={fondo} scale={100} >
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="black" colorA="orange" alpha={1} mode="add" near={10} far={200} origin={[100, 100, -100]} />
        <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={50} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="simplex" scale={5000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
        <Fresnel  mode= 'add' color= "fresnel" intensity= "0.3" power= "2.5" bias= "0.0" />
      </LayerMaterial>
    </mesh>
  )
}
