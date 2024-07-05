// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Rotating3DObject = ({ imageUrl }) => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     const width = mount.clientWidth;
//     const height = mount.clientHeight;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     mount.appendChild(renderer.domElement);

//     // Load the image as a texture    
//     const textureLoader = new THREE.TextureLoader();
//     textureLoader.load(imageUrl, (texture) => {
//       const geometry = new THREE.PlaneGeometry(10, 10);
//       const material = new THREE.MeshBasicMaterial({ map: texture });
//       const plane = new THREE.Mesh(geometry, material);
//       scene.add(plane);

//       // Camera positioning
//       camera.position.z = 20;

//       // Mouse movement event listener
//       const mouse = { x: 0, y: 0 };
//       const handleMouseMove = (event) => {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//       };
//       document.addEventListener('mousemove', handleMouseMove);

//       // Animation loop
//       const animate = () => {
//         requestAnimationFrame(animate);
//         plane.rotation.x += mouse.y * 0.01;
//         plane.rotation.y += mouse.x * 0.01;
//         renderer.render(scene, camera);
//       };
//       animate();
//     });

//     // Cleanup on component unmount
//     return () => {
//       mount.removeChild(renderer.domElement);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [imageUrl]);

//   return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
// };

// export default Rotating3DObject;
      