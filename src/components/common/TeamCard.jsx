const TeamCard = ({ imageSrc, title, description }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-200 text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;