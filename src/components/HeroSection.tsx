import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1610264146566-c233419fb1c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGNvbnN0cnVjdGlvbiUyMHRlYW18ZW58MHx8MHx8fDA%3D",
      alt: "Home Construction Team",
    },
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
      alt: "Home Building Progress",
    },
    {
      url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=1080&fit=crop",
      alt: "Exterior Renovation",
    },
    {
      url: "https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMHJlbW9kZWxsaW5nfGVufDB8fDB8fHww",
      alt: "Kitchen Remodeling",
    },
    {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&h=1080&fit=crop",
      alt: "Contractor Consultation",
    },
  ];

  useEffect(() => {
    // Initial entrance animations
    const tl = gsap.timeline({ delay: 1 });

    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        subtextRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)" },
        "-=0.4"
      );

    // Start auto-rotation immediately
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      tl.kill();
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [heroImages.length]);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen max-h-[950px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div ref={textRef} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="text-yellow-400 font-mona">
              Pinkerton Construction
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
            A Construction Company You Can Trust
          </h2>
        </div>

        <div ref={subtextRef} className="mb-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-gray-300">
            From the first blueprint to the final nail, our team delivers
            dependable construction services backed by years of experience and a
            reputation for excellence.
          </p>
        </div>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Get A Quote
          </button>
          <button
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>

      {/* Emergency Contact Float */}
      <div className="absolute top-24 right-6 bg-gray-800 bg-opacity-90 text-white p-6 rounded-lg shadow-xl hidden lg:block">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-2">
            For 24/7 Emergency Support
          </p>
          <p className="text-2xl font-bold">(806) 751-0035</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
