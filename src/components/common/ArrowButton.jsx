import { ArrowLeft, ArrowRight } from "lucide-react";

const ArrowButton = ({ direction = "right", onClick }) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 
                 rounded-full border border-red-500 
                 text-red-500 hover:bg-red-500 hover:text-black 
                 transition"
    >
      {isLeft ? <ArrowLeft size={20} color="white" /> : <ArrowRight size={20} color="white" />}
    </button>
  );
};

export default ArrowButton;
