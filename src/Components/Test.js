import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane } from '@react-three/drei';

const RotatingImage = ({ src }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Plane args={[2, 2]} rotation={[0, 0, 0]}>
        <meshBasicMaterial>
          <canvasTexture
            image={src}
            onUpdate={(texture) => (texture.needsUpdate = true)}
          />
        </meshBasicMaterial>
      </Plane>
    </Canvas>
  );
};

export default RotatingImage;
