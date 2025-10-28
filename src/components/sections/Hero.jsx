import { useGSAP } from "@gsap/react";
import { words } from "../../constants";
import Button from "../Button";
import HeroExperience from "../HeroModel/HeroExperience";
import gsap from 'gsap';
const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-0">
                <img src="/public/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* left side : hero content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-5">
                        <div className="hero-text">
                            <h1>
                                <span className="text-pink-600">Shaping</span>
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span
                                                key={word.text}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>
                                                    {word.text}
                                                </span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Into Real Projects</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative text-wrap z-10 pointer-events-none">
                            Namaste 🙏, I'm <span className="font-semibold text-pink-600"><i>Amit Sarkar</i></span> — a passionate front-end and <span className="text-blue-500 font-bold">MERN</span> Stack <br /> developer from Bangladesh who loves turning ideas into interactive experiences.
                        </p>
                        <Button id='button' className='md:w-80 md:h-16 w-16 h-12 ' text='See My Work'></Button>
                    </div>
                </header>
                {/* right side : hero 3D model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience></HeroExperience>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
