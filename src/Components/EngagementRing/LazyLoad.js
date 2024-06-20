import React, { useRef, useEffect } from 'react';

const CanvasImage = ({ src, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('3d');
    const image = new Image();

    image.src = src;
    image.onload = () => {
      context.drawImage(image, 0, 0, width, height);
    };
  }, [src, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} className="absolute w-full h-full inset-0 object-cover" style={{ opacity: 1 }} />;
};

export default CanvasImage;
