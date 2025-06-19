export default function Cards() {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-20">
      <div className="cardcontainer h-[60vh] w-1/2">
        <div className="card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="OCHI"
          />
          <button className="absolute px-3 py-1 rounded-full border-2 border-[#B7D864] left-10 bottom-10 font-neuemontreal text-[#B7D864] text-[1.111vw]">
            ©2019-2025
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card relative rounded-lg w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Clutch"
          />
          <button className="absolute uppercase px-3 py-1 rounded-full border-2 left-10 bottom-10 font-neuemontreal text-[0.9725vw]">
            Rating 5.0 On Clutch
          </button>
        </div>
        <div className="card relative rounded-lg w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-26"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Future Academy"
          />
          <button className="absolute uppercase px-3 py-1 rounded-full border-2 left-10 bottom-10 font-neuemontreal text-[0.9725vw]">
            Buisness Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}
