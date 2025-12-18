
import card6 from "../../assets/img/card6.jpg"
import ArrowButton from '../common/ArrowButton';

const Partner = () => {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 relative">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src={card6}
                            alt="Two professionals shaking hands"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-left">
                        <span className="inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            The Power of Partnership
                        </span>
                    </h1>
                    <p className="text-white/80 max-w-xl">
                        True success is built on strong collaboration. By working closely with our clients, we turn shared goals into meaningful outcomes.
                    </p>
                    <div className="pt-4">
                        <div className="group flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300">
                            Know More
                            <ArrowButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;