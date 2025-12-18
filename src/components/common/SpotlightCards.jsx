import waveImg from "../../assets/img/waveImg.png";
import blogImg from "../../assets/img/blogImg.jpg";
import caseStudy from "../../assets/img/caseStudy.jpg";
import report from "../../assets/img/report.jpg";
import story from "../../assets/img/story.jpg";
import ArrowButton from './ArrowButton';

const SpotlightCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div
          className="mt-6 w-full max-w-[400px] h-auto rounded-lg overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at 10% 20%, #8076F4 0%, transparent 40%)',
            opacity: 0.8,
          }}
        >
          <img
            src={waveImg}
            alt="Purple wave"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div
        className="md:col-span-1 bg-gradient-to-br from-blue-600 to-purple-700 p-6  shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <h3 className="text-xl font-semibold mb-3 uppercase">NEWS ARTICLES</h3>
        <p className="mb-4">
          Ensuring consistent, affordable, and efficient delivery of energy to meet growing demand.
        </p>
        <div className="absolute bottom-4  px-4 py-2 rounded text-sm font-medium transition flex items-center gap-1">
          <label className="text-white ">
            Learn more
          </label>
          <ArrowButton />
        </div>
      </div>

      <div
        className="h-full bg-gray-800 relative overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${blogImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 uppercase">BLOGS</h3>
          </div>
          <div className="flex items-center justify-end mt-10 gap-2">
            <label className="text-white">Learn more</label>
            <ArrowButton />
          </div>
        </div>
      </div>

      <div
        className="h-full bg-gray-800 relative overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${caseStudy})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        <div className="p-6 h-80 flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 uppercase">Case Study</h3>
          </div>
          <div className="flex items-center justify-end mt-10 gap-2">
            <label className="text-white">Learn more</label>
            <ArrowButton />
          </div>
        </div>
      </div>

      <div
        className="h-full bg-gray-800 relative overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${report})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 uppercase">Report</h3>
          </div>
          <div className="flex items-center justify-end mt-10 gap-2">
            <label className="text-white">Learn more</label>
            <ArrowButton />
          </div>
        </div>
      </div>

      <div
        className="h-full bg-gray-800 relative overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${story})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 uppercase">Success story</h3>
          </div>
          <div className="flex items-center justify-end mt-10 gap-2">
            <label className="text-white">Learn more</label>
            <ArrowButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCards;