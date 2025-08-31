import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the window size
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Mouse position object
    let mouse = {
      x: null,
      y: null,
      radius: 150 // Area of effect around the mouse
    };

    // Event listener to update mouse position
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    // Event listener to handle window resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init(); // Re-initialize particles on resize
    };

    // Particle class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Method to draw individual particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // Method to update particle's position
      update() {
        // Bounce particles off the edges of the canvas
        if (this.x > width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Move the particle
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    let particlesArray;

    // Create and initialize the particles
    function init() {
      particlesArray = [];
      // Determine number of particles based on screen area
      let numberOfParticles = (height * width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * .4) - .2;
        let directionY = (Math.random() * .4) - .2;
                        let color = 'rgba(20, 184, 166, 0.8)'; // Teal color with transparency

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Function to connect particles with lines
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          // If particles are close enough, draw a line between them
          if (distance < (width / 7) * (height / 7)) {
            opacityValue = 1 - (distance / 20000);
                            ctx.strokeStyle = `rgba(20, 184, 166, ${opacityValue})`; // Teal color with dynamic opacity
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start the animation
    init();
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef} 
        id="plexus-canvas"
        className="hero-canvas"
      />
      
      {/* Hero content overlay */}
      <div className="hero-content-overlay">
        <div className="container hero-container">
          <div className="hero-text-right">
            <h1 className="hero-main-text">
              Technology that empowers your dreams
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
