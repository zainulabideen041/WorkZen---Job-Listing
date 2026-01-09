import DoodleImg from "../assets/doodle.png";
import WorkTogether from "../assets/worktogether.png";

const Smarter = () => {
  return (
    <div className="flex flex-col md:flex-row relative justify-around items-center py-10 md:py-0">
      {/* Background with opacity */}
      <div
        style={{ backgroundImage: `url(${DoodleImg})` }}
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
      />

      <div className="relative mb-10 md:mb-0 px-4">
        <img
          src={WorkTogether}
          alt="work together"
          className="w-full max-w-[500px] py-10"
        />
        <h1 className="absolute font-bold text-xl md:text-2xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          LOGO
        </h1>
      </div>
      <div className="flex flex-col justify-center items-start px-4 md:px-8 max-w-xl">
        <h1 className="text-4xl md:text-7xl font-bold text-black mb-4">
          Manage Smarter
        </h1>
        <p className="text-gray-800 text-lg md:text-xl mb-2 leading-relaxed">
          With WorkZen-Pro, streamline your workforce management and empower
          your team with efficiency.
        </p>
        <p className="text-gray-800 text-lg md:text-xl mb-6 leading-relaxed">
          Easily track attendance, manage shifts, and simplify payroll — all in
          one place.
        </p>
        <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded-md font-medium hover:bg-[#44a39d] transition-colors duration-300 inline-flex items-center gap-2">
          Try it now
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Smarter;
