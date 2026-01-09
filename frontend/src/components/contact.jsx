import leftImg from "../assets/leftline.png";
import rightImg from "../assets/rightline.png";
import circleImg from "../assets/circle.png";

const Contact = () => {
  return (
    <div className="relative pt-20 md:pt-[350px] pb-20">
      <img
        src={leftImg}
        alt=""
        className="absolute left-0 top-0 w-[50%] md:w-auto"
        width={800}
      />
      <img
        src={rightImg}
        alt=""
        className="absolute right-0 top-20 md:top-0 w-[50%] md:w-auto"
        width={1200}
      />
      <img
        src={circleImg}
        alt=""
        className="absolute right-10 md:right-20 opacity-10 hidden md:block"
        width={150}
      />
      <img
        src={circleImg}
        alt=""
        className="absolute right-[25%] top-[25%] opacity-10 hidden md:block"
        width={150}
      />
      <img
        src={circleImg}
        alt=""
        className="absolute right-[5%] top-[50%] opacity-10 hidden md:block"
        width={150}
      />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-12 md:gap-16 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Left Side - Contact Form */}
        <div className="flex-1 w-full max-w-md">
          <form className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent text-gray-700 placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#4FD1C5] text-white px-10 py-3 rounded-md font-medium hover:bg-[#44a39d] transition-colors duration-300 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex-1 max-w-xl md:pt-20 items-center justify-center flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-black mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We strive to respond to all inquiries within 48 hours. Thank you for
            your patience and interest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
