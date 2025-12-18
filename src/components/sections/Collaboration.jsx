import make from "../../assets/img/make.jpg";
import ArrowButton from '../common/ArrowButton';

const CollaborationCTASection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div
        className="relative overflow-hidden shadow-2xl h-[400px] md:h-[500px]"
        style={{
          backgroundImage: `url(${make})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Make Something Great Together!</h2>
         
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white font-medium transition-all duration-300"
          >
            Connect HPIT
            <ArrowButton />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationCTASection;