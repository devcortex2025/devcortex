import React, { useRef, useEffect } from 'react';

// Import technology icons
import icon1 from '../assets/elements_tech/7959961001582545568-128.png';
import icon2 from '../assets/elements_tech/1643084561599979347-128.png';
import icon3 from '../assets/elements_tech/9647756701553508672-128.png';
import icon4 from '../assets/elements_tech/13977808341644315243-128.png';
import icon5 from '../assets/elements_tech/5569287981678698656-128.png';

// Simple 3D sphere component using vanilla Three.js
const TechnologySphereScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, sphere;
    let techElements = [];
    
    const init = async () => {
      try {
        // Dynamically import Three.js
        const THREE = await import('three');
        
        // Create scene
        scene = new THREE.Scene();
        sceneRef.current = scene;
        
        // Create camera
        camera = new THREE.PerspectiveCamera(75, 600 / 600, 0.1, 1000);
        camera.position.z = 8;
        
        // Create renderer
        renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current,
          alpha: true,
          antialias: true 
        });
        renderer.setSize(600, 600);
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;
        
        // Create wireframe sphere - sparse density
        const geometry = new THREE.SphereGeometry(3, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
          color: 0x10B981,
          wireframe: true,
          transparent: true,
          opacity: 0.9
        });
        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        
        // Load texture loader
        const textureLoader = new THREE.TextureLoader();
        
        // Create floating technology elements
        const createTechElement = (type, position, color, iconUrl = null) => {
          let geometry, material, mesh;
          
          if (iconUrl) {
            // Create textured plane for actual icons
            geometry = new THREE.PlaneGeometry(0.8, 0.8);
            const texture = textureLoader.load(iconUrl);
            material = new THREE.MeshBasicMaterial({ 
              map: texture,
              transparent: true,
              opacity: 0.9,
              side: THREE.DoubleSide
            });
          } else {
            // Create basic shapes for non-icon elements
            switch(type) {
              case 'phone':
                geometry = new THREE.BoxGeometry(0.3, 0.6, 0.05);
                break;
              case 'laptop':
                geometry = new THREE.BoxGeometry(0.5, 0.3, 0.02);
                break;
              case 'cloud':
                geometry = new THREE.SphereGeometry(0.2, 8, 6);
                break;
              case 'ai':
                geometry = new THREE.OctahedronGeometry(0.2);
                break;
              case 'database':
                geometry = new THREE.CylinderGeometry(0.2, 0.2, 0.4);
                break;
              default:
                geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            }
            
            material = new THREE.MeshBasicMaterial({ 
              color: color,
              transparent: true,
              opacity: 0.8
            });
          }
          
          mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(position.x, position.y, position.z);
          mesh.userData = { 
            type: type,
            originalPosition: { ...position },
            rotationSpeed: Math.random() * 0.02 + 0.01,
            orbitSpeed: Math.random() * 0.01 + 0.005,
            orbitRadius: Math.random() * 1.5 + 3.5,
            orbitAngle: Math.random() * Math.PI * 2
          };
          
          return mesh;
        };
        
        // Add technology elements around the sphere
        const techIcons = [icon1, icon2, icon3, icon4, icon5];
        const basicTypes = ['phone', 'laptop', 'cloud', 'ai', 'database'];
        const colors = [0x3B82F6, 0x10B981, 0xF59E0B, 0xEF4444, 0x8B5CF6];
        
        // Add icon elements (5 icons)
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2;
          const radius = 3.5 + Math.random() * 1.5;
          const height = (Math.random() - 0.5) * 2.5;
          
          const position = {
            x: Math.cos(angle) * radius,
            y: height,
            z: Math.sin(angle) * radius
          };
          
          const element = createTechElement('icon', position, null, techIcons[i]);
          scene.add(element);
          techElements.push(element);
        }
        
        // Add basic shape elements (reduced to 5)
        for (let i = 0; i < 5; i++) {
          const type = basicTypes[i % basicTypes.length];
          const color = colors[i % colors.length];
          const angle = ((i + 5) / 10) * Math.PI * 2; // Offset from icons
          const radius = 3.5 + Math.random() * 1.5;
          const height = (Math.random() - 0.5) * 2.5;
          
          const position = {
            x: Math.cos(angle) * radius,
            y: height,
            z: Math.sin(angle) * radius
          };
          
          const element = createTechElement(type, position, color);
          scene.add(element);
          techElements.push(element);
        }
        
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
        scene.add(ambientLight);
        
        // Add point light
        const pointLight = new THREE.PointLight(0xffffff, 1.2);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        
        // Animation loop - slowed down rotation
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);
          
          if (sphere) {
            sphere.rotation.y += 0.003; // Slower Y rotation
            sphere.rotation.x += 0.001; // Slower X rotation
          }
          
          // Animate technology elements
          techElements.forEach((element) => {
            // Rotate each element
            element.rotation.y += element.userData.rotationSpeed;
            element.rotation.x += element.userData.rotationSpeed * 0.5;
            
            // Orbit around the sphere
            element.userData.orbitAngle += element.userData.orbitSpeed;
            const orbitRadius = element.userData.orbitRadius;
            const orbitAngle = element.userData.orbitAngle;
            
            element.position.x = Math.cos(orbitAngle) * orbitRadius;
            element.position.z = Math.sin(orbitAngle) * orbitRadius;
            
            // Add some floating motion
            element.position.y = element.userData.originalPosition.y + Math.sin(Date.now() * 0.001 + orbitAngle) * 0.3;
          });
          
          renderer.render(scene, camera);
        };
        
        animate();
        
      } catch (error) {
        console.error('Three.js initialization failed:', error);
        // Show fallback content
        if (canvasRef.current) {
          canvasRef.current.style.display = 'none';
        }
      }
    };
    
    init();
    
    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '600px',
          height: '600px'
        }}
      />
    </div>
  );
};

export default TechnologySphereScene;
