import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./room";
import HeroLight from "./HeroLight";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });

    // Adaptive camera and model positions
    const cameraPosition = isMobile ? [0, 0, 12] : isTablet ? [0, 0, 14] : [0, 0, 15];
    const modelScale = isMobile ? 0.7 : isTablet ? 0.85 : 1;
    const modelPosition = isMobile ? [0, -2.5, 0] : isTablet ? [0, -3, 0] : [0, -3.5, 0];
    const modelRotation = [0, -Math.PI / 4, 0];

    return (
        <Canvas camera={{ position: cameraPosition, fov: 45 }}>

            {/* Orbit Controls */}
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <HeroLight></HeroLight>
            {/* Group containing the model */}
            <group scale={modelScale} position={modelPosition} rotation={modelRotation}>
                <Room />
            </group>
        </Canvas>
    );
};

export default HeroExperience;
