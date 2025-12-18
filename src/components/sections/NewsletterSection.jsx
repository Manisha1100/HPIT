
import React from 'react';
import newImg from '../../assets/img/newImg.jpg'
const NewsletterSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Newsletter</h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative rounded-lg overflow-hidden shadow-xl group">
            <img
              src={newImg}
              alt="Team collaborating"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Stay Ahead with the HPIT Edge</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Get the latest updates from HPIT, including expert perspectives, technology breakthroughs, and news that keeps you at the forefront of digital transformation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mt-6">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700  focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium  transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;