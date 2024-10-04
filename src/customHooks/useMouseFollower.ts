import React, {useState, useEffect} from 'react'

type Props = {
    num : number
}

export const useMouseFollower = ({num} : Props) => {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true); // Ensures this is only set on the client
  }, []);

  useEffect(() => {
    if(isClient){
      setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
 
    }, [isClient]);

    const calculateRotation = () => {
      if(isClient){
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const deltaX = mousePosition.x - centerX;
        const deltaY = mousePosition.y - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Calculate angle in degrees
        return angle;
      }

    };
  
    const calculateScale = () => {
      if(isClient){
        const distance = Math.hypot(
          mousePosition.x - window.innerWidth / 2,
          mousePosition.y - window.innerHeight / 2
        );
        const maxDistance = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
        return 1 + (distance / maxDistance); // Scale factor based on distance
      }

    };
  
    const rotation = calculateRotation();
    const scale = calculateScale();
  //   scale(${scale})

  const calculateTransform = () => {
    if(isClient){
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = mousePosition.x - centerX;
      const deltaY = mousePosition.y - centerY;
      const rotateY = deltaX / centerX * num; // Maximum rotation of 30 degrees
      const rotateX = -deltaY / centerY * num; // Maximum rotation of 30 degrees
      return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    };
  
    const transform = calculateTransform();

    return {
        transform
    }
}
