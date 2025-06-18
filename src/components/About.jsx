export default function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black">
      <h1 className="max-w-[1226.67px] font-neuemontreal text-[3.611vw] leading-none">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{" "}
        <span className="underline">
          raise funds, sell products, explain complex ideas,
        </span>{" "}
        and <span className="underline">hire great peo-ple.</span>
      </h1>
      <div className="w-full border-t-[1px] border-[#A5BC57] mt-20 pt-10 flex gap-5">
        <div className="w-1/2 font-neuemontreal">
          <h1 className="text-[3.61vw] leading-none">Our approach:</h1>
          <button className="flex gap-10 items-center uppercase px-7 py-6 bg-zinc-900 rounded-full text-white mt-6 font-neuemontreal leading-none text-[.975vw]">
            Read More
            <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-cyan-400 rounded-lg">
          <img
            src="src/assets/images/about-photo.jpg"
            alt="About"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
