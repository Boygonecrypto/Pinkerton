import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  ChefHat,
  Lightbulb,
  Palette,
  Wrench,
  TrendingUp,
  Heart,
} from "lucide-react";

const KitchenRenovationPage = () => {
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
      icon: <ChefHat className="h-8 w-8" />,
      title: "Custom Design",
      description:
        "Personalized kitchen designs that reflect your cooking style and family needs.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Smart Solutions",
      description:
        "Modern appliances and smart storage solutions for maximum functionality.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Premium Finishes",
      description:
        "High-quality materials and finishes that combine beauty with durability.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Value",
      description:
        "Kitchen renovations typically provide 70-80% return on investment.",
    },
  ];

  const kitchenStyles = [
    {
      title: "Modern Minimalist",
      description:
        "Clean lines, sleek surfaces, and contemporary appliances for a streamlined look.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      features: [
        "Handleless cabinets",
        "Quartz countertops",
        "Integrated appliances",
        "Under-cabinet lighting",
      ],
    },
    {
      title: "Traditional Elegance",
      description:
        "Classic design elements with raised panel cabinets and timeless appeal.",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop",
      features: [
        "Raised panel doors",
        "Natural stone counters",
        "Crown molding",
        "Classic hardware",
      ],
    },
    {
      title: "Farmhouse Charm",
      description:
        "Rustic elements combined with modern functionality for cozy, inviting spaces.",
      image:
        "https://images.unsplash.com/photo-1543372195-1d3915d8c0f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm1ob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      features: [
        "Shaker cabinets",
        "Farmhouse sink",
        "Open shelving",
        "Butcher block counters",
      ],
    },
    {
      title: "Transitional Style",
      description:
        "Perfect blend of traditional and contemporary elements for versatile appeal.",
      image:
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=400&h=300&fit=crop",
      features: [
        "Mixed materials",
        "Neutral colors",
        "Simple lines",
        "Versatile design",
      ],
    },
  ];

  const renovationProcess = [
    "Initial consultation and needs assessment",
    "Design development and 3D renderings",
    "Material selection and procurement",
    "Demolition and structural work",
    "Plumbing and electrical installation",
    "Cabinet and countertop installation",
    "Final finishes and detail work",
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop"
            alt="Beautiful Kitchen"
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
                Kitchen Renovation
              </h1>
              <p className="text-[18px] font-semibold font-mona text-gray-200 mb-8 leading-relaxed">
                Transform the heart of your home with our expert kitchen
                renovation services. We create beautiful, functional kitchens
                that bring families together and make cooking a joy. From layout
                optimization to premium finishes, we handle every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Kitchen Project
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Kitchen Designs
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop"
                alt="Stunning renovated kitchen"
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
              Why Choose Our Kitchen Renovation Services?
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              We combine culinary expertise with construction excellence to
              create kitchens that are both beautiful and highly functional.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6 group-hover:bg-orange-600 transition-colors duration-300">
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

      {/* Kitchen Styles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Kitchen Styles
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              Explore different kitchen styles and find the perfect design that
              matches your taste and lifestyle.
            </p>
          </div>

          <div ref={stylesRef} className="grid md:grid-cols-2 gap-8">
            {kitchenStyles.map((style, index) => (
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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

      {/* Renovation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Kitchen Renovation Process
              </h2>
              <p className="text-[18px] font-semibold font-mona text-gray-600 mb-8">
                We follow a systematic approach to ensure your kitchen
                renovation is completed efficiently with minimal disruption to
                your daily routine.
              </p>
              <div className="space-y-4">
                {renovationProcess.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&h=400&fit=crop"
                alt="Kitchen renovation in progress"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Value */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <Heart className="inline-block h-8 w-8 text-red-500 mr-3" />A
                  Kitchen That Loves You Back
                </h2>
                <p className="text-[18px] font-semibold font-mona text-gray-600 mb-6">
                  Your kitchen should be more than just functional—it should be
                  a space where memories are made, families gather, and culinary
                  creativity flourishes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Increased home value by 70-80%
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Enhanced daily living experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Improved energy efficiency
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Better organization and storage
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://plus.unsplash.com/premium_photo-1663088614981-6cdc772af9f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5JTIwZmFtaWx5JTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Happy family in kitchen"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-[18px] font-semibold font-mona text-white mb-8 opacity-95">
            Let's design and build the kitchen you've always wanted. Schedule
            your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Kitchen Design Consultation
            </button>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
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

export default KitchenRenovationPage;
