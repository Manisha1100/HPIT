import ArrowButton from "./ArrowButton";

const ServiceCard = ({ props }) => {
  return (
    <div className="w-full h-[500px] relative">

      <img src={props.bg} alt="img" className="absolute top-0 left-0 z-0 h-[500px] w-full object-cover" />

      <div className={`absolute top-0 left-0 w-full h-full ${props.isRight ? "bg-[linear-gradient(277.26deg,_#000000_26.37%,_rgba(0,0,0,0)_90.57%)]" : "bg-[linear-gradient(277.71deg,_rgba(0,0,0,0)_0.2%,_#000000_80.81%,_#000000_82.21%)] z-10"}`}></div>
      <div className={`absolute top-0 left-0 z-20 flex items-center ${props.isRight ? "justify-end" : "justify-start"} w-full h-full`}>
        <div className="flex flex-col gap-3 w-[50%] ml-20">
          <h1 className="text-4xl fot-bold bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
         bg-clip-text text-transparent">{props.heading}</h1>
          <p className="text-white">{props.description}</p>
          <div className="flex items-center mt-10 gap-2">
            <label className="text-white">
              View Case Study
            </label>
            <ArrowButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
