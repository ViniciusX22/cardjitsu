import { Canvas, RootState } from "@react-three/fiber";
import { Vector3 } from "three";
// import { CameraControls } from "./components/CameraControls";
import TableModel from "./components/TableModel";

function App() {
  function handleSetup({ gl, camera }: RootState) {
    gl.setClearColor(0xfefefe);
    camera.lookAt(new Vector3(0, 6, 2));
  }

  return (
    <div id="container">
      <Canvas
        gl={{ antialias: true }}
        camera={{ fov: 45, position: [0, 10, 6], near: 0.1, far: 1000 }}
        shadows
        onCreated={handleSetup}
      >
        <Cards />
        <directionalLight
          intensity={0.8}
          position-y={10}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <ambientLight color={0xa3a3a3} intensity={0.3} />
        <gridHelper args={[12, 12]} />
        {/* <CameraControls /> */}
        <TableModel />
      </Canvas>
    </div>
  );
}

export default App;
