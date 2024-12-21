import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// import { CARDS, emperorTexture, slaveTexture } from "./cards";
import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

function Cards() {
  const textures = useLoader(TextureLoader, [
    "./assets/citizen1.png",
    "./assets/citizen2.png",
    "./assets/citizen3.png",
    "./assets/card2.png",
    "./assets/emperor.png",
    "./assets/slave.png",
    "./assets/citizen4.png",

    "./assets/card2.png",
    "./assets/emperor.png",
    "./assets/slave.png",
  ]);
  // const cardGeo = new BoxGeometry(0.4, 0.6, 0.001);
  // const cardMat = [
  //   new MeshBasicMaterial(),
  //   new MeshBasicMaterial(),
  //   new MeshBasicMaterial(),
  //   new MeshBasicMaterial(),
  //   new MeshBasicMaterial({ map: textures[4] }),
  //   new MeshBasicMaterial({ map: textures[5] }),
  // ];
  // const card = new Mesh(cardGeo, card5Mat);
  // card.name = name;
  // card.castShadow = true;
  // card.position.copy(pos[rNumb]);
  // card.rotation.set(rot[rNumb].x, rot[rNumb].y, rot[rNumb].z);

  const CARDS = [
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[0] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[1] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[2] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[3] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[4] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[5] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[6] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[7] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[8] })
    ),
    new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: textures[9] })
    ),
  ];

  useEffect(() => {
    CARDS.forEach((card) => {
      card.material.forEach((material) => {
        if (material.map) {
          material.map.needsUpdate = true;
        }
      });
    });
  }, [textures]);

  return (
    <>
      {CARDS.map((card, index) => (
        <primitive key={index} object={card} />
      ))}
    </>
  );
}
