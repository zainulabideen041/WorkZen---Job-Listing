import DotsImg from "../assets/blur.png";

const Subscription = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-4 md:mx-10 rounded-3xl border border-[#C4C4C4] mt-16 md:mt-24">
        <div className="relative shadow-xl border-[#4FD1C5] w-full md:w-[80%] pt-10 md:pt-0">
          {/* Top Button - positioned above the border */}
          <button className="relative md:absolute md:-top-6 md:left-10 mx-auto md:mx-0 mb-6 md:mb-0 bg-[#4FD1C5] text-white px-8 md:px-12 py-3 md:py-4 rounded-md font-medium hover:bg-[#44a39d] transition-colors duration-300 inline-flex items-center gap-2 text-base md:text-lg shadow-lg">
            Start your subscription
            <span>→</span>
          </button>

          {/* Background Pattern Layer */}
          <div
            style={{
              backgroundImage: `url(${DotsImg})`,
              backgroundSize: "150%",
            }}
            className="absolute inset-0 bg-cover top-20 -left-20 rounded-lg -z-10 w-full hidden md:block"
          />

          {/* Content */}
          <div className="text-left pt-2 md:pt-8 mt-4 md:mt-20 px-5 pb-8 md:pb-0">
            <h2 className="text-gray-900 text-3xl md:text-5xl font-bold mb-4">
              Enterprise
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
              Let's Talk
            </h1>
            <h3 className="text-gray-800 text-2xl md:text-4xl mb-8 md:mb-12">
              For huge business
            </h3>

            {/* Bottom Button */}
            <div className="flex justify-center md:block">
              <button className="bg-[#4FD1C5] text-white w-full md:w-[500px] py-4 rounded-md font-medium hover:bg-[#44a39d] transition-colors duration-300 text-lg shadow-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-20 bg-[#4FD1C5] w-full py-16 md:h-[500px] px-6 md:px-20 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-6xl p-2 md:p-5 font-bold text-white mb-4">
          Manage your workforce, wherever you are
        </h1>
        <p className="text-lg md:text-2xl mb-8 md:mb-12 text-white max-w-4xl mx-auto">
          Access WorkZen-Pro from your computer, phone, or tablet. Available on
          Windows, macOS, Linux, Android, and iOS — stay connected and in
          control no matter where work takes you! A powerful web app for easy,
          on-the-go management!
        </p>
        <button className="bg-[#4F9CF9] text-white px-10 md:px-20 py-4 font-medium hover:bg-[#44a39d] transition-colors duration-300 text-lg shadow-lg">
          Try WorkZen-Pro
        </button>
      </div>
    </div>
  );
};

export default Subscription;
