import BgImg from "../assets/bg-boxes.png";
import HeroImg from "../assets/hero.png";
import PicsImg from "../assets/pics.png";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-center flex flex-col justify-center items-center py-20 min-h-[calc(100vh-80px)]"
    >
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto text-center px-4 md:px-8">
        {/* Badge */}
        <h2 className="text-sm text-gray-600 mb-6 font-medium">
          #1 Workforce Management Software
        </h2>

        {/* Main Heading */}
        <h1 className="w-full font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 leading-tight max-w-5xl mx-auto">
          Revolutionize Your <span className="text-[#4FD1C5]">Workforce</span>{" "}
          Management
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Effortlessly manage shifts, schedules, and staff with Workzen-Pro your
          all-in-one workforce management solution.
        </p>

        {/* Button */}
        <button className="bg-[#4FD1C5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#44a39d] transition-colors duration-300 mb-3 inline-flex items-center gap-2">
          <span>⚡</span>
          Try 14 days free
        </button>

        {/* Subtext */}
        <p className="text-sm text-gray-500 mb-4">No credit card required</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-12">
          <div className="flex text-[#4FD1C5]">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <p className="text-sm text-gray-400">1k+ rating on Judge.me</p>
        </div>
      </div>

      {/* Images container */}
      <div className="flex flex-col items-center w-full px-4">
        <img
          src={HeroImg}
          alt="hero image"
          className="w-full max-w-4xl h-auto"
        />
        <img
          src={PicsImg}
          alt="hero image"
          className="mt-8 md:mt-12 w-full max-w-4xl h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
