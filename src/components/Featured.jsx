export default function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="font-neuemontreal text-[3.61vw] leading-none">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="flex flex-col w-1/2 gap-5">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full"></div>
              <div className="font-neuemontreal text-[0.9725vw] uppercase">
                Fyde
              </div>
            </div>
            <div className="cardcontainer relative w-full h-[75vh]">
              <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-founders text-9xl leading-none font-semibold text-[#CDEA68]">
                {"FYDE".split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="src/assets/images/fyde-image.png"
                  alt="Fyde"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-5">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full"></div>
              <div className="font-neuemontreal text-[0.9725vw] uppercase">
                Vise
              </div>
            </div>
            <div className="cardcontainer relative w-full h-[75vh]">
              <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-founders text-9xl leading-none font-semibold text-[#CDEA68]">
                {"VISE".split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="src/assets/images/vise-image.png"
                  alt="Vise"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
