import bg from "../../assets/img/bg.png";
import ArrowButton from "../common/ArrowButton"

const Hero = () => {
    return (
        <section
            className="relative h-[80vh] flex items-center px-10 overflow-hidden"
            style={{ backgroundImage: `url(${bg})` }}
        >

            <div className="absolute bg-black/60"></div>

            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    <span className="outlined-text block">Innovation</span>
                    <span className="text-white block">At Every Step</span>
                </h1>
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex justify-between">
                <ArrowButton direction="left" />
                <ArrowButton direction="right" />
            </div>

        </section>
    );
};

export default Hero;
