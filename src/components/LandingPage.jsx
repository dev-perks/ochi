import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="textstrucuture pt-40 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <div className="w-[9vw] h-[5.9vw] bg-blue-400 relative top-[0.5vw] rounded-md mr-[1.305vw]"></div>
              )}
              <h1 className="uppercase font-founders text-[9vw] leading-[6.8vw] font-semibold">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-base font-neuemontreal font-normal leading-6"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="uppercase px-5 py-2 border-[1px] border-zinc-400 font-neuemontreal rounded-full text-[14.9333px] leading-[14.9333px]">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}