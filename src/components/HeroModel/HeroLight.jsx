
const HeroLight = () => {

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.3} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={2} />
        </>
    );
};

export default HeroLight;