import { useState, useEffect } from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const testimonials = [
    {
      id: 1,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Faizan Chaudhry",
      title: "Head of Talent Acquisition, North America",
      bgColor: "bg-white",
      textColor: "text-black",
      quoteColor: "text-[#4FD1C5]",
      nameColor: "text-[#4FD1C5]",
    },
    {
      id: 2,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Faizan Chaudhry",
      title: "Head of Talent Acquisition, North America",
      bgColor: "bg-[#5B9FF8]",
      textColor: "text-white",
      quoteColor: "text-white",
      nameColor: "text-white",
    },
    {
      id: 3,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Faizan Chaudhry",
      title: "Head of Talent Acquisition, North America",
      bgColor: "bg-[#5B9FF8]",
      textColor: "text-white",
      quoteColor: "text-white",
      nameColor: "text-white",
    },
    {
      id: 4,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Sarah Johnson",
      title: "VP of Operations, Tech Corp",
      bgColor: "bg-white",
      textColor: "text-black",
      quoteColor: "text-[#4FD1C5]",
      nameColor: "text-[#4FD1C5]",
    },
    {
      id: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Michael Chen",
      title: "Director of HR, Global Industries",
      bgColor: "bg-[#5B9FF8]",
      textColor: "text-white",
      quoteColor: "text-white",
      nameColor: "text-white",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = testimonials.length - itemsPerPage;

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [maxSlides]);

  const goToSlide = (index) => {
    if (index > maxSlides) index = maxSlides;
    setCurrentSlide(index);
  };

  return (
    <div className="py-16 px-4 md:px-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-black text-center mb-16">
        What Our Clients Says
      </h1>

      {/* Testimonial Carousel */}
      <div className="relative overflow-hidden max-w-7xl mx-auto mb-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / itemsPerPage)}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 px-3 ${
                itemsPerPage === 1 ? "w-full" : "w-1/3"
              }`}
            >
              <div
                className={`${testimonial.bgColor} rounded-xl p-8 shadow-lg h-full flex flex-col justify-between`}
              >
                <div>
                  {/* Quote Icon */}
                  <div
                    className={`text-6xl ${testimonial.quoteColor} mb-6 font-serif`}
                  >
                    "
                  </div>

                  {/* Testimonial Text */}
                  <p
                    className={`${testimonial.textColor} text-base mb-6 leading-relaxed`}
                  >
                    {testimonial.text}
                  </p>
                </div>

                <div>
                  {/* Divider */}
                  <hr
                    className={`border-t ${
                      testimonial.textColor === "text-white"
                        ? "border-white/30"
                        : "border-gray-300"
                    } mb-6`}
                  />

                  {/* Profile Section */}
                  <div className="flex items-center gap-4">
                    {/* Profile Image */}
                    <div className="w-16 h-16 rounded-full bg-gray-400 flex-shrink-0">
                      <img
                        src="https://via.placeholder.com/64"
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Name and Title */}
                    <div>
                      <h3
                        className={`${testimonial.nameColor} font-semibold text-lg`}
                      >
                        {testimonial.name}
                      </h3>
                      <p
                        className={`${testimonial.textColor} text-sm opacity-80`}
                      >
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3">
        {[...Array(maxSlides + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-[#4FD1C5]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
