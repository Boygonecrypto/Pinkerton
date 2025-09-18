import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Building,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Award,
} from "lucide-react";

const CommercialConstructionPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      benefitsRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Property Value",
      description:
        "Quality commercial construction enhances your property value and creates lasting business assets.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Minimal Downtime",
      description:
        "We work efficiently to minimize disruption to your business operations during construction.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Code Compliance",
      description:
        "Full compliance with commercial building codes, safety regulations, and accessibility requirements.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Results",
      description:
        "Create impressive spaces that reflect your brand and provide excellent customer experiences.",
    },
  ];

  const commercialServices = [
    {
      title: "Office Buildings",
      description:
        "Modern office spaces designed for productivity and employee satisfaction.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      features: [
        "Open floor plans",
        "Modern HVAC systems",
        "Energy-efficient lighting",
        "Professional finishes",
      ],
    },
    {
      title: "Retail Spaces",
      description:
        "Attractive retail environments that enhance customer experience and drive sales.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      features: [
        "Custom storefronts",
        "Flexible layouts",
        "Modern lighting",
        "Security systems",
      ],
    },
    {
      title: "Restaurants",
      description:
        "Complete restaurant construction and renovation from kitchen to dining areas.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      features: [
        "Commercial kitchens",
        "Dining room design",
        "Bar installations",
        "Code compliance",
      ],
    },
    {
      title: "Warehouses",
      description:
        "Functional warehouse and industrial spaces built for efficiency and durability.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      features: [
        "High ceilings",
        "Loading docks",
        "Industrial lighting",
        "Climate control",
      ],
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Commercial Construction"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div
          ref={heroRef}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Commercial Construction
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Elevate your business with our full-service commercial
                construction solutions. From modern office buildings to
                welcoming retail spaces, we design and build properties that are
                functional, visually impressive, and tailored to support your
                company’s growth and success
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Request Quote
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Commercial building construction"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Construction Advantages
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              Our commercial construction expertise empowers businesses to
              create modern, efficient, and inspiring spaces that support
              growth, enhance operations, and leave a lasting impression
            </p>
          </div>

          <div
            ref={benefitsRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Commercial Services
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              We specialize in a wide range of commercial construction projects,
              carefully tailored to meet the unique needs of every business,
              from functional layouts to standout designs
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Businesses Choose Pinkerton Construction
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Commercial Expertise
                    </h3>
                    <p className="text-gray-600">
                      25+ years of commercial construction experience with
                      projects ranging from small offices to large retail
                      centers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Project Management
                    </h3>
                    <p className="text-gray-600">
                      Dedicated project managers ensure your commercial project
                      stays on schedule and within budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Licensed & Insured
                    </h3>
                    <p className="text-gray-600">
                      Fully licensed commercial contractors with comprehensive
                      insurance coverage for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Commercial construction team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Commercial Project to Life?
          </h2>
          <p className="text-[18px] font-semibold font-mona text-white mb-8 opacity-95">
            Let’s talk about your commercial construction goals and design a
            space that not only meets your needs but also supports long-term
            business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Commercial Quote
            </button>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Call (806) 751-0035
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CommercialConstructionPage;
