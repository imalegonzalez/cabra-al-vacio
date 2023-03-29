import { PivotControls } from "@react-three/drei";

export function Lights(){
   return(
    <>
    <PivotControls >
    <spotLight
    castShadow
      position={[0,2,0]}
      distance={8}
      intensity={2}
      angle={0.6}
      attenuation={1}
      anglePower={4.5} // Diffuse-cone anglePower (default: 5)
    />
    </PivotControls>
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        attenuation={1}
        shadow-bias={-0.0001}
      />   
        <spotLight
        
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        attenuation={1}
        shadow-bias={-0.0001}
      />
     
      <ambientLight intensity={.5}/>
      </>
   )}