import { useLoader } from "@react-three/fiber";
import { Mesh, Object3D, Object3DEventMap } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function TableModel() {
  const result = useLoader(GLTFLoader, "/assets/kitchen_table.glb");
  const model = result.scene;

  model.traverse(
    (node: Object3D<Object3DEventMap>) =>
      node instanceof Mesh && (node.receiveShadow = true)
  );

  return (
    <primitive
      object={model}
      rotation-y={Math.PI / 2}
      scale={0.35}
      position={[0.25, 0, 0]}
    />
  );
}
