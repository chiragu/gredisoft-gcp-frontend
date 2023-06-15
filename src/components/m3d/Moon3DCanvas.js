import { Canvas, useLoader } from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import * as THREE from "three";
import moonimg from "../../images/moon.jpg";
import earthimg from "../../images/earth.jpg";


const Moon = () => {
    const texture = useLoader(THREE.TextureLoader, moonimg)
    return (
      <mesh position={[0,0,0]}>
        <sphereBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="white" map={texture} />
      </mesh>
    );
}

const Earth = () => {
    const texture = useLoader(THREE.TextureLoader, earthimg)
    return (
      <mesh position={[-35,20,-80]} scale={[3.7,3.7,3.7]}>
        <sphereBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="white" map={texture} />
      </mesh>
    );
}

const Moon3DCanvas = () => {
    return ( 
        <Canvas>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Moon />
            <Earth />                        
        </Canvas>
     );
}
 
export default Moon3DCanvas;