
import TeamCard from '../common/TeamCard';
import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
import team3 from '../../assets/img/team3.jpg';
import ArrowButton from '../common/ArrowButton';

const JoinOurTeam = (props) => {
  const cards = [
    {
      imageSrc: team1,
      title: "WHY HPIT",
      description: "A place where innovation and growth come together."
    },
    {
      imageSrc: team2,
      title: "WHAT WE OFFER",
      description: "Benefits and opportunities to help you excel."
    },
    {
      imageSrc: team3,
      title: "JOB SEARCH",
      description: "Find roles that fit your skills and passion."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-left">
            <span className="inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-white/80 mt-4">
            We’re always looking for passionate, driven individuals to grow with us. At our core, we value collaboration, creativity, and a commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <TeamCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="flex justify-end mt-12 space-x-4">
          <ArrowButton direction="left" variant="default"/>
          <ArrowButton direction="right" variant="active"/>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;