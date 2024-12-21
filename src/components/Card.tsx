function Card() {
  const cardGeo = new BoxGeometry(0.4, 0.6, 0.001);
  const cardMat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({ map: textures[4] }),
    new MeshBasicMaterial({ map: textures[5] }),
  ];
  const card = new Mesh(cardGeo, card5Mat);
  card.name = name;
  card.castShadow = true;
  card.position.copy(pos[rNumb]);
  card.rotation.set(rot[rNumb].x, rot[rNumb].y, rot[rNumb].z);

  return (
    <mesh>
      <boxGeometry args={[0.4, 0.6, 0.001]} />
      {Array.from({ length: 6 }).map((_, i) => (
        <meshBasicMaterial key={i} map={} />
      ))}
    </mesh>
  );
}
