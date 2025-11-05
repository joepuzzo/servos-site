import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { ServoFace } from './ServoFace';

// Ice cube decoration component
function IceCube({ position, size = 20 }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'rgba(100, 149, 237, 0.4)',
        borderRadius: '4px',
        transform: 'rotate(45deg)',
      }}
    />
  );
}

// Card Face Component using HTML overlays
function CardFaceHtml({ children, position, rotation }) {
  // Standard business card: 3.5" x 2" = 5:2.857 ratio ≈ 1.75:1
  // Using 1.75:1 ratio for the card
  const cardWidth = 1.75;
  const cardHeight = 1;
  const pixelWidth = 1750;
  const pixelHeight = 1000;
  
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[cardWidth, cardHeight]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <Html
        position={[0, 0, 0.001]}
        transform
        occlude
        style={{
          width: `${pixelWidth}px`,
          height: `${pixelHeight}px`,
          pointerEvents: 'none',
        }}
      >
        <div style={{
          width: `${pixelWidth}px`,
          height: `${pixelHeight}px`,
          backgroundColor: 'white',
          borderRadius: '40px',
          padding: '50px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}>
          {children}
        </div>
      </Html>
    </group>
  );
}

// Business Card Component
function BusinessCard({ flipRotation, onFlip }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = flipRotation;
    }
  });

  return (
    <group ref={groupRef} scale={[0.4, 0.4, 0.4]}>
      {/* Front Face */}
      <CardFaceHtml
        position={[0, 0, 0.001]}
        rotation={[0, 0, 0]}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          gap: '20px',
          position: 'relative',
        }}>
          {/* Ice cube decorations - randomly placed but consistent */}
          <IceCube position={{ x: 8, y: 12 }} size={28} />
          <IceCube position={{ x: 67, y: 7 }} size={24} />
          <IceCube position={{ x: 91, y: 18 }} size={26} />
          <IceCube position={{ x: 15, y: 43 }} size={22} />
          <IceCube position={{ x: 78, y: 51 }} size={25} />
          <IceCube position={{ x: 6, y: 76 }} size={29} />
          <IceCube position={{ x: 89, y: 85 }} size={27} />
          <IceCube position={{ x: 52, y: 91 }} size={23} />
          
          <div style={{ width: '200px', height: '143px', zIndex: 1 }}>
            <ServoFace width="200" />
          </div>
          <h1 style={{
            fontSize: '96px',
            fontWeight: 'bold',
            color: '#2C2C2C',
            margin: '20px 0 0 0',
            letterSpacing: '3px',
            zIndex: 1,
          }}>SERVO'S</h1>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'normal',
            color: '#666',
            margin: '10px 0',
            zIndex: 1,
          }}>Iced Bucket</h2>
          <p style={{
            fontSize: '36px',
            fontWeight: 'normal',
            color: '#666',
            margin: '50px 0 0 0',
            letterSpacing: '6px',
            zIndex: 1,
          }}>Cold, Clean, Ice, Anywhere</p>
        </div>
      </CardFaceHtml>

      {/* Back Face */}
      <CardFaceHtml
        position={[0, 0, -0.001]}
        rotation={[0, Math.PI, 0]}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          gap: '80px',
          padding: '50px',
          boxSizing: 'border-box',
        }}>
          {/* Left side - Contact Info */}
          <div style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            <h1 style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#2C2C2C',
              margin: '0 0 15px 0',
            }}>Joe Puzzo</h1>
            <h2 style={{
              fontSize: '54px',
              fontWeight: 'normal',
              color: '#3e6ae1',
              margin: '0 0 30px 0',
            }}>SERVO LLC</h2>
            <div style={{
              width: '100%',
              height: '3px',
              backgroundColor: '#2C2C2C',
              margin: '30px 0',
            }} />
            <div style={{
              fontSize: '34px',
              color: '#2C2C2C',
              lineHeight: '2',
            }}>
              <div><strong>Phone:</strong> (603)-630-9814</div>
              <div><strong>Website:</strong> sipservos.com</div>
              <div><strong>Email:</strong> servosllc@gmail.com</div>
            </div>
            <div style={{
              fontSize: '30px',
              color: '#2C2C2C',
              marginTop: '50px',
              lineHeight: '1.8',
            }}>
              <div>135 McDonough St, #321</div>
              <div>Portsmouth, NH 03801</div>
            </div>
          </div>

          {/* Right side - Dispenser Image */}
          <div style={{
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '20px',
          }}>
            <img
              src="/DispenserLeftNoCup.png"
              alt="Servo Dispenser"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </CardFaceHtml>
    </group>
  );
}

// Camera controller component that adjusts based on screen width
function CameraController({ cameraDistance }) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Only update camera position when distance changes, not every frame
    const targetZ = cameraDistance;
    const currentZ = camera.position.z;
    
    // Smoothly interpolate to target distance
    if (Math.abs(currentZ - targetZ) > 0.01) {
      camera.position.set(0, 0, targetZ);
      camera.updateProjectionMatrix();
    }
  }, [camera, cameraDistance]);
  
  return null;
}

export const BusinessCard3D = () => {
  const [flipRotation, setFlipRotation] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [cameraDistance, setCameraDistance] = useState(16);
  const orbitControlsRef = useRef();
  const [copied, setCopied] = useState(false);

  // Adjust camera distance based on screen width
  useEffect(() => {
    const calculateCameraDistance = () => {
      const width = window.innerWidth;
      
      // Base distance for 1920px width is 16 (reduced to make card larger)
      // Use a more gradual scaling curve
      const baseWidth = 1920;
      const baseDistance = 16;
      
      // Use a square root scaling for more gradual changes
      // Smaller screens = further camera (larger distance) = smaller card
      // Larger screens = closer camera (smaller distance) = larger card
      const scaleFactor = Math.sqrt(baseWidth / width);
      const distance = baseDistance * scaleFactor;
      
      // Clamp between reasonable values - allow larger distances for smaller screens
      const clampedDistance = Math.max(14, Math.min(50, distance));
      setCameraDistance(clampedDistance);
      console.log('Screen width:', width, 'Scale factor:', scaleFactor.toFixed(2), 'Camera distance:', clampedDistance.toFixed(2)); // Debug
    };

    calculateCameraDistance();
    window.addEventListener('resize', calculateCameraDistance);
    
    return () => window.removeEventListener('resize', calculateCameraDistance);
  }, []);

  const handleFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    
    // First, reset OrbitControls to default orientation
    if (orbitControlsRef.current) {
      orbitControlsRef.current.reset();
    }
    
    // Small delay to let the reset happen, then flip
    setTimeout(() => {
      const targetRotation = flipRotation === 0 ? Math.PI : 0;
      const startRotation = flipRotation;
      const duration = 800; // milliseconds
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2; // ease-in-out

        setFlipRotation(startRotation + (targetRotation - startRotation) * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsFlipping(false);
        }
      };

      animate();
    }, 50);
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/business-card`;
    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, cameraDistance], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <CameraController cameraDistance={cameraDistance} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, 5, -5]} intensity={0.5} />
          <BusinessCard flipRotation={flipRotation} onFlip={handleFlip} />
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minDistance={cameraDistance * 0.3}
            maxDistance={cameraDistance * 1.5}
          />
        </Suspense>
      </Canvas>
      <div className="business-card-buttons">
        <button
          onClick={handleFlip}
          className="flip-card-button"
        >
          Flip
        </button>
        <button
          onClick={handleShare}
          className="share-card-button"
        >
          {copied ? 'Copied!' : 'Share'}
        </button>
      </div>
    </div>
  );
};

