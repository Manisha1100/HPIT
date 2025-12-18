import eventImg from '../../assets/img/event.jpg';
import pressImg from '../../assets/img/press.jpg';
import newsImg from '../../assets/img/news.jpg';
import ArrowButton from '../common/ArrowButton';

const InsightsSection = () => {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 max-w-3xl">
                    <h1 className="text-4xl font-bold text-left">
                        <span className="inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Explore Our Latest Insights
                        </span>
                    </h1>
                    <p className="text-white/80">
                        Explore our latest insights to stay ahead of the curve with fresh perspectives, expert analysis, and emerging trends across industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <button
                        className="px-6 py-3 rounded-lg font-medium text-white relative group border-2 border-transparent transition-all duration-300"
                        style={{
                            borderImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, #615BFE 50%, rgba(255, 255, 255, 0.08) 100%) 1',
                        }}
                    >
                        <span className="relative z-10">Event</span>
                        <div
                            className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: 'linear-gradient(3.07deg, #000000 -19.82%, #615BFE 234.85%)',
                            }}
                        ></div>
                    </button>
                    <button
                        className="px-6 py-3 rounded-lg font-medium text-white relative group border-2 border-transparent transition-all duration-300"
                        style={{
                            borderImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, #615BFE 50%, rgba(255, 255, 255, 0.08) 100%) 1',
                        }}
                    >
                        <span className="relative z-10">Press Resles</span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: 'linear-gradient(3.07deg, #000000 -19.82%, #615BFE 234.85%)',
                            }}
                        ></div>
                    </button>
                    <button
                        className="px-6 py-3 rounded-lg font-medium text-white relative group border-2 border-transparent transition-all duration-300"
                        style={{
                            borderImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, #615BFE 50%, rgba(255, 255, 255, 0.08) 100%) 1',
                        }}
                    >
                        <span className="relative z-10">Latest News</span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: 'linear-gradient(3.07deg, #000000 -19.82%, #615BFE 234.85%)',
                            }}
                        ></div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <img
                            src={eventImg}
                            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#22252B] backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2 uppercase">Digital summit</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Shaping the future with innovation and collaboration.
                            </p>
                            <div className="flex items-center mt-10 gap-2">
                                <label className="text-white">Learn more</label>
                                <ArrowButton />
                            </div>
                        </div>
                    </div>

                    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <img
                            src={pressImg}
                            alt="Cyber Form"
                            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#22252B] backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2 uppercase">cyber form</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Insights on security and resilience from global experts.
                            </p>
                            <div className="flex items-center mt-10 gap-2">
                                <label className="text-white">Learn more</label>
                                <ArrowButton />
                            </div>
                        </div>
                    </div>
                    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <img
                            src={newsImg}
                            alt="Tech Expo"
                            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#22252B] backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2 uppercase">Tech expo</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Showcasing trends and breakthroughs across industries.
                            </p>
                            <div className="flex items-center mt-10 gap-2">
                                <label className="text-white">Learn more</label>
                                <ArrowButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;