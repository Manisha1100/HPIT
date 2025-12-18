import SpotlightCards from '../common/SpotlightCards';

const Spotlight = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-left">
            <span className="inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              SpotLight
            </span>
          </h1>
          <p className="text-white/80 max-w-xl">
            SpotLight showcases the people, projects, and ideas driving innovation and impact across HPIT
          </p>

        </div>
      </div>
      <SpotlightCards />
    </section>
  );
};

export default Spotlight;