import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home,
  Building,
  Wrench,
  PaintBucket,
  Plus,
  Hammer,
} from "lucide-react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title entrance animation
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Staggered card entrance animations
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Remodeling",
      description:
        "Your home should reflect your lifestyle. Whether it’s a single-room update or a full-scale renovation, we specialize in creating living spaces that are modern, functional, and built to last. Our team ensures every detail is carefully crafted to bring your vision to life.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Commercial Construction",
      description:
        "We partner with businesses to design and build workspaces that inspire productivity and leave lasting impressions. From office renovations to large-scale construction, our commercial services deliver efficiency, style, and structural excellence, tailored to your company’s goals.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      icon: <PaintBucket className="h-12 w-12" />,
      title: "Kitchen Renovation",
      description:
        "The kitchen is the heart of every home and it deserves to be both beautiful and practical. We create custom kitchens with stunning cabinetry, durable countertops, and layouts that make cooking, entertaining, and gathering more enjoyable than ever.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Bathroom Remodeling",
      description:
        "Elevate your daily routine with a bathroom designed for comfort and style. Whether you’re dreaming of a luxury spa-like retreat or need practical updates for accessibility, we transform bathrooms into spaces that are as functional as they are elegant.",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Roof Repair",
      description:
        "Your roof is your home’s first line of defense. Our expert roofing services include repairs, replacements, and preventative maintenance that keep your property safe from the elements. We use high-quality materials and proven methods to ensure lasting protection.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      icon: <Plus className="h-12 w-12" />,
      title: "Home Additions",
      description:
        "Need more space? Our custom home additions expand your living area without sacrificing style. From extra bedrooms and home offices to sunrooms and entertainment spaces, we design seamless extensions that feel like they’ve always been part of your home.",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Construction Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-mona text-[17px] font-semibold">
            For years, Pinkerton Construction has helped homeowners bring their
            vision to life with reliable construction and remodeling services.
            From concept to completion, our skilled contractors oversee every
            detail, ensuring quality craftsmanship, clear communication, and
            results that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <a
                  href={
                    service.title === "Residential Remodeling"
                      ? "/services/residential-remodeling"
                      : service.title === "Commercial Construction"
                        ? "/services/commercial-construction"
                        : service.title === "Kitchen Renovation"
                          ? "/services/kitchen-renovation"
                          : service.title === "Bathroom Remodeling"
                            ? "/services/bathroom-remodeling"
                            : service.title === "Roof Repair"
                              ? "/services/roof-repair"
                              : service.title === "Home Additions"
                                ? "/services/home-additions"
                                : "#services"
                  }
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 transform hover:scale-105 group-hover:translate-x-1"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-yellow-500/0 group-hover:from-blue-600/5 group-hover:to-yellow-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-[17px] font-semibold font-mona text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Our dedicated team of
              construction experts will work with you from the very first
              consultation to the final walkthrough, ensuring your project is
              completed on time, on budget, and beyond expectations. Contact us
              today for a free consultation and detailed quote. Let’s start
              building your dream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+15551234567"
                className="bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Call (806) 751-0035
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
