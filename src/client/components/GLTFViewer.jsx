import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// XYZ Coordinate System component
function CoordinateSystem({ size = 1 }) {
  return (
    <group>
      {/* X-axis (Red) */}
      <mesh position={[size/2, 0, 0]}>
        <boxGeometry args={[size, 0.02, 0.02]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* X-axis arrow */}
      <mesh position={[size, 0, 0]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Y-axis (Green) */}
      <mesh position={[0, size/2, 0]}>
        <boxGeometry args={[0.02, size, 0.02]} />
        <meshStandardMaterial color="green" />
      </mesh>
      {/* Y-axis arrow */}
      <mesh position={[0, size, 0]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
      
      {/* Z-axis (Blue) */}
      <mesh position={[0, 0, size/2]}>
        <boxGeometry args={[0.02, 0.02, size]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* Z-axis arrow */}
      <mesh position={[0, 0, size]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      
      {/* Origin point */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

function Model({ url, scale = 2, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  const [modelCenter, setModelCenter] = useState([0, 0, 0]);

  useEffect(() => {
    if (scene) {
      // Calculate the actual center of the model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      setModelCenter([center.x, center.y, center.z]);
      
      // Move the model so its center is at origin
      scene.position.sub(center);
    }
  }, [scene]);

  return <primitive object={scene} scale={[scale, scale, scale]} rotation={rotation} />;
}

function CameraController({ onCameraChange, scale, rotation, scrollRotation }) {
  const { camera } = useThree();
  
  useEffect(() => {
    const updateCameraInfo = () => {
      onCameraChange({
        position: [camera.position.x, camera.position.y, camera.position.z],
        scale: scale,
        rotation: rotation
      });
    };

    // Update on camera changes
    const interval = setInterval(updateCameraInfo, 100);
    return () => clearInterval(interval);
  }, [camera, onCameraChange, scale, rotation]);

  // Update camera position based on scroll rotation
  useEffect(() => {
    const distance = 2;
    const totalAngle = Math.PI/6 + scrollRotation; // 30 degrees + scroll rotation
    
    const x = distance * Math.cos(totalAngle);
    const z = distance * Math.sin(totalAngle);
    const y = 0;
    
    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld();
  }, [camera, scrollRotation]);

  return null;
}

export const GLTFViewer = ({ modelPath = '/AssemblyV12.gltf' }) => {
  const [cameraInfo, setCameraInfo] = useState({ position: [0, 0, 0], scale: 3.5, rotation: [0, 0, 0] });
  const [scale, setScale] = useState(3.5);
  const [scrollRotation, setScrollRotation] = useState(0);

  const DEG_90 = Math.PI/2;
  const DEG_30 = Math.PI/6; // 30 degrees in radians


//   const INITIAL_X_ROTATION = -DEG_90;
//   const INITIAL_Y_ROTATION = DEG_90/2;
//   const INITIAL_Z_ROTATION = DEG_90;

  const INITIAL_X_ROTATION = -DEG_90;
  const INITIAL_Y_ROTATION = Math.PI/6;
  const INITIAL_Z_ROTATION = DEG_90;

  // Camera rotation offset around Z-axis (same axis as auto-rotation)
  const CAMERA_Z_ROTATION_OFFSET = 0; // 30 degrees - change this value as needed

  const [rotation, setRotation] = useState([INITIAL_X_ROTATION, INITIAL_Y_ROTATION, INITIAL_Z_ROTATION]);

  // Calculate responsive scale based on screen size
  useEffect(() => {
    const calculateScale = () => {
      const baseWidth = 1920;
      const baseScale = 3.5;
      
      const currentWidth = window.innerWidth;
      
      // Calculate scale factor based on screen width with more gradual scaling
      const widthRatio = currentWidth / baseWidth;
      const gradualRatio = Math.sqrt(widthRatio); // More gradual scaling
      const responsiveScale = baseScale * gradualRatio;
      setScale(responsiveScale);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Handle scroll-based rotation
  useEffect(() => {
    const handleScroll = () => {
      const viewerElement = document.querySelector('[data-gltf-viewer]');
      if (!viewerElement || !viewerElement.getBoundingClientRect) return;

      const rect = viewerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when to start rotation (20% from top of screen)
      const startThreshold = windowHeight * 0.2;
      const distanceFromTop = rect.top;
      
      // Only start rotation when element is 10% from top of screen
      if (distanceFromTop <= startThreshold) {
        // console.log('scroll', distanceFromTop, startThreshold);
        // Calculate progress (0 to 1) based on how much the element has moved
        const totalDistance = windowHeight + rect.height;
        const progress = Math.max(0, Math.min(1, (startThreshold - distanceFromTop) / totalDistance));
        
        // Apply rotation based on progress (you can adjust the max rotation here)
        const maxRotation = Math.PI * 4; // Full 360 degrees
        const currentRotation = progress * -maxRotation;
        
        // console.log('progress:', progress, 'rotation:', currentRotation);
        setScrollRotation(currentRotation);
      } else {
        setScrollRotation(0);
      }
    };

    // Only add event listener if we're in a browser environment
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Calculate camera position with rotation offset and scroll rotation
  const getCameraPosition = () => {
    const distance = 2; // Distance from origin
    const totalAngle = CAMERA_Z_ROTATION_OFFSET + scrollRotation;
    
    // Calculate position on the XZ plane with rotation
    const x = distance * Math.cos(totalAngle);
    const z = distance * Math.sin(totalAngle);
    const y = 0; // Keep Y at 0 for horizontal rotation
    
    // console.log('camera position:', [x, y, z], 'totalAngle:', totalAngle, 'scrollRotation:', scrollRotation);
    return [x, y, z];
  };

 
  return (
    <div 
      data-gltf-viewer
      style={{ width: '100%', height: '70vh', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}
    >
      <Canvas
        camera={{ position: getCameraPosition(), fov: 50 }}
        // style={{ background: '#181a1b' }}
      >
        <Suspense fallback={null}>
          <CameraController onCameraChange={setCameraInfo} scale={scale} rotation={rotation} scrollRotation={scrollRotation} />
          <Model url={modelPath} scale={scale} rotation={rotation}/>
          {/* <CoordinateSystem size={0.5} /> */}
          <ambientLight intensity={0.2} color="#ffffff" />
          <directionalLight position={[10, 0, 0]} intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} distance={10} />
          <directionalLight position={[-5, 8, -5]} intensity={1.2} distance={10} />
        </Suspense>
        <OrbitControls 
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI/2}
          maxPolarAngle={Math.PI/2}
        //   autoRotate={true}
        //   zoomSpeed={0.8}
        //   minDistance={1}
        //   maxDistance={20}
        //   minAzimuthAngle={0}
        //   maxAzimuthAngle={0}
        />
      </Canvas>
    </div>
  );
}; 
