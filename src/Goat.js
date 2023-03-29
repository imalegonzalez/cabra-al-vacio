import { useLoader, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { Float, useGLTF } from '@react-three/drei'
import { Color as laminaColor ,LayerMaterial, Base, Depth, Fresnel, Noise } from 'lamina/vanilla'

const colorA = new THREE.Color('#2032A5').convertSRGBToLinear()
const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
const fresnel = new THREE.Color('#E7B473').convertSRGBToLinear()
const material = new LayerMaterial({
  layers: [
    new laminaColor({ color: colorA }),
    new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorA: 'purple', colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: fresnel, intensity: 0.3, power: 2.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'black', mode: 'overlay' })
  ]
})





 function Instance(props){
//     const {nodes} = useGLTF('/models/scene.gltf')
    const { nodes, materials } = useGLTF("/models/scene.glb");
    const { viewport, camera } = useThree()
    const [geometry] = useState(() => nodes[`goat`].geometry)
    const [speed] = useState(() => 0.1 + Math.random() / 2)
    const position = useMemo(() => {
                const z = Math.random() * -33
                const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
                return [THREE.MathUtils.randFloatSpread(bounds.width *2), THREE.MathUtils.randFloatSpread(bounds.height), z]

                    }, [viewport])


  return (
    <Float  position={position} speed={speed} rotationIntensity={50} floatIntensity={30} dispose={null} >
        <group {...props} scale={viewport.width / viewport.height /5} >
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0001.geometry}
            material={materials["Goat_Black.001"]}
            />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0001_1.geometry}
            material={materials["Material.001"]}
            />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0001_2.geometry}
            material={material}
            />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0001_3.geometry}
            material={materials["Goat_Horn.001"]}
            />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0001_4.geometry}
            material={materials["Goat_Claws.001"]}
            />
        </group>
    </Float>
  );
}

export  function Goat() {
    return Array.from({ length: 30 }, (_, i) => <Instance key={i} />)
  }
  

useGLTF.preload('/models/scene.glb')