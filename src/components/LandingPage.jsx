export default function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="textstrucuture pt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((text, index) => (
          <div className="masker" key={index}>
            <h1 className="uppercase font-founders text-[138.667px] leading-[104px] font-semibold">{text}</h1>
          </div>
        ))}
      </div>
      
    </div>
  );
}
