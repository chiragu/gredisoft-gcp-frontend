import { Canvas } from "@react-three/fiber";

const Metaverse3DCanvas = () => {
    return ( 
      <div>
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />   
        </Canvas>
        <h3>This app is under construction. Please check back later for updates.</h3>        
      </div>
     );
}
 
export default Metaverse3DCanvas;