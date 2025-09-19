import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Droplets,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Heart,
} from "lucide-react";

const BathroomRemodelingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const stylesRef = useRef<HTMLDivElement>(null);

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
      featuresRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const features = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Spa-Like Experience",
      description:
        "Transform your bathroom into a relaxing spa retreat with luxury fixtures and finishes.",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Modern Amenities",
      description:
        "Smart mirrors, heated floors, and advanced lighting for ultimate comfort.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Water Protection",
      description:
        "Proper waterproofing and ventilation to prevent moisture damage.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Value",
      description:
        "Bathroom renovations provide excellent return on investment.",
    },
  ];

  const bathroomStyles = [
    {
      title: "Luxury Spa Bathroom",
      description:
        "Create a resort-like experience with premium materials and spa features.",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
      features: [
        "Walk-in shower",
        "Soaking tub",
        "Heated floors",
        "Premium fixtures",
      ],
    },
    {
      title: "Modern Minimalist",
      description:
        "Clean lines, geometric shapes, and sleek surfaces for contemporary appeal.",
      image:
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop",
      features: [
        "Floating vanities",
        "Frameless glass",
        "LED lighting",
        "Neutral colors",
      ],
    },
    {
      title: "Traditional Elegance",
      description:
        "Classic design elements with timeless appeal and sophisticated finishes.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      features: [
        "Clawfoot tub",
        "Subway tile",
        "Pedestal sink",
        "Classic hardware",
      ],
    },
    {
      title: "Small Space Solutions",
      description:
        "Maximize functionality in compact bathrooms with smart storage solutions.",
      image:
        "https://images.unsplash.com/photo-1611066415506-54b1bf5da1f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsayUyMGluJTIwc2hvd2VyJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D",
      features: [
        "Space-saving fixtures",
        "Built-in storage",
        "Light colors",
        "Clever layouts",
      ],
    },
  ];

  const luxuryFeatures = [
    "Rainfall showerheads and body sprays",
    "Heated towel racks and floors",
    "Smart mirrors with LED lighting",
    "Soaking tubs and whirlpools",
    "Custom tile work and natural stone",
    "High-end fixtures and hardware",
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1080&fit=crop"
            alt="Luxury Bathroom"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div
          ref={heroRef}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Bathroom Remodeling
              </h1>
              <p className="text-[18px] font-semibold font-mona text-gray-200 mb-8 leading-relaxed">
                Create your personal oasis with our luxury bathroom remodeling
                services. From spa-like master suites to functional family
                bathrooms, we design and build beautiful spaces that enhance
                your daily routine and add value to your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Bathroom Project
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Bathroom Designs
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop"
                alt="Beautiful renovated bathroom"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Bathroom Into a Personal Sanctuary
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              We combine years of remodeling expertise with a commitment to
              luxury design and functional detail, creating bathrooms that
              elevate your home while perfectly balancing beauty and usability.
            </p>
          </div>

          <div
            ref={featuresRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 text-white rounded-full mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bathroom Styles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Bathroom Styles
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              From modern minimalism to timeless elegance, discover bathroom
              styles that match your vision and bring your lifestyle to life.
            </p>
          </div>

          <div ref={stylesRef} className="grid md:grid-cols-2 gap-8">
            {bathroomStyles.map((style, index) => (
              <div
                key={style.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {style.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {style.description}
                  </p>
                  <ul className="space-y-2">
                    {style.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
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

      {/* Luxury Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <Zap className="inline-block h-8 w-8 text-yellow-500 mr-3" />
                Luxury Features & Amenities
              </h2>
              <p className="text-[16px] font-semibold font-mona text-gray-600 mb-8">
                Elevate your daily routine with premium bathroom features that
                provide comfort, convenience, and a touch of luxury.
              </p>
              <div className="space-y-4">
                {luxuryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
                alt="Luxury bathroom features"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility & Safety */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1611066415506-54b1bf5da1f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsayUyMGluJTIwc2hvd2VyJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D"
                  alt="Accessible bathroom design"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <Shield className="inline-block h-8 w-8 text-green-500 mr-3" />
                  Accessibility & Safety Features
                </h2>
                <p className="text-[16px] font-semibold font-mona text-gray-600 mb-6">
                  We design bathrooms that are safe and accessible for all
                  family members, incorporating universal design principles for
                  long-term livability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Grab bars and safety rails
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Non-slip flooring materials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Walk-in showers and low-threshold entries
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Comfort-height fixtures
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Improved lighting and ventilation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Dream Bathroom?
          </h2>
          <p className="text-[18px] font-semibold font-mona text-white mb-8 opacity-95">
            We’ll partner with you to design a bathroom that’s not only stunning
            but also highly functional, making your daily routine more enjoyable
            and stress-free. Schedule your consultation today and let’s bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Bathroom Design Consultation
            </button>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              (806) 751-0035
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BathroomRemodelingPage;
