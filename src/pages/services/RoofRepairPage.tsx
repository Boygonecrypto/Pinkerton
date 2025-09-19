import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Home, Shield, Clock, Wrench, CloudRain, Phone } from "lucide-react";

const RoofRepairPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const materialsRef = useRef<HTMLDivElement>(null);

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
      servicesRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const roofingServices = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Roof Replacement",
      description:
        "Complete roof replacement with premium materials and expert installation.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Roof Repairs",
      description:
        "Quick and reliable repairs for leaks, storm damage, and wear issues.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Emergency Services",
      description:
        "24/7 emergency roof repair services to protect your home immediately.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Inspections",
      description:
        "Comprehensive roof inspections to identify potential issues early.",
    },
  ];

  const roofingMaterials = [
    {
      title: "Asphalt Shingles",
      description:
        "Most popular roofing material offering excellent value and durability.",
      image:
        "https://media.istockphoto.com/id/1357777445/photo/roofers-installing-new-roof-on-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=LifhLJ4a5hDsBulFXBmRDUWvFzTg5ojYjW02_FaBoc8=",
      features: [
        "25-30 year lifespan",
        "Weather resistant",
        "Multiple color options",
        "Cost-effective",
      ],
    },
    {
      title: "Metal Roofing",
      description:
        "Long-lasting, energy-efficient roofing with excellent weather protection.",
      image:
        "https://media.istockphoto.com/id/1301569557/photo/building-contractor-is-installing-metal-roofing-sheets.webp?a=1&b=1&s=612x612&w=0&k=20&c=MLSKVvkxORCqczwGD_7vU-zRtqcb2Yun3eyNaAf-KKk=",
      features: [
        "50+ year lifespan",
        "Energy efficient",
        "Fire resistant",
        "Low maintenance",
      ],
    },
    {
      title: "Tile Roofing",
      description:
        "Traditional clay or concrete tiles offering distinctive style and longevity.",
      image:
        "https://media.istockphoto.com/id/823328086/photo/new-roof-installation.webp?a=1&b=1&s=612x612&w=0&k=20&c=95owpITFAErcZivy0yVtcisnPsX7NNm_hsaFLFPdpU8=",
      features: [
        "Long-lasting",
        "Fire resistant",
        "Energy efficient",
        "Classic appearance",
      ],
    },
    {
      title: "Slate Roofing",
      description:
        "Premium natural stone roofing for unmatched beauty and durability.",
      image:
        "https://plus.unsplash.com/premium_photo-1710282122654-604457e6cc95?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xhdGUlMjByb29maW5nfGVufDB8fDB8fHww",
      features: [
        "100+ year lifespan",
        "Natural beauty",
        "Fire resistant",
        "Premium quality",
      ],
    },
  ];

  const warningSignsData = [
    "Missing, cracked, or damaged shingles",
    "Granules in gutters or around the house",
    "Water stains on ceilings or walls",
    "Sagging roof areas or visible dips",
    "Daylight visible through roof boards",
    "Moss or algae growth on shingles",
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Professional Roofing"
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
                Professional Roof Repair
              </h1>
              <p className="text-[18px] font-semibold font-mona text-gray-200 mb-8 leading-relaxed">
                Protect your most valuable investment with our expert roofing
                services. From emergency repairs to complete roof replacements,
                we use quality materials and proven techniques to keep your home
                safe and dry for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Roof Inspection
                </button>
                <a
                  href="tel:+15551234567"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                >
                  Emergency: (806) 751-0035
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop"
                alt="Professional roof installation"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-white" />
              <span className="text-white font-semibold">
                24/7 Emergency Roof Repair:
              </span>
            </div>
            <a
              href="tel:+15551234567"
              className="text-white font-bold text-xl hover:underline"
            >
              (806) 751-0035
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Roofing Services
            </h2>
            <p className="text-[18px] font-semibold font-monatext-xl text-gray-600 max-w-3xl mx-auto">
              From minor roof repairs to full-scale replacements, we offer
              comprehensive roofing services designed to protect your home,
              enhance curb appeal, and ensure long-term durability. Our skilled
              team uses only quality materials and proven techniques to deliver
              results you can trust.
            </p>
          </div>

          <div
            ref={servicesRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {roofingServices.map((service, index) => (
              <div
                key={service.title}
                className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-6 group-hover:bg-red-700 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality Roofing Materials
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              Our team partners with trusted suppliers to provide roofing
              materials of the highest quality. This means your new roof won’t
              just stand up to Texas weather, but will also enhance the style,
              comfort, and appearance of your home.
            </p>
          </div>

          <div ref={materialsRef} className="grid md:grid-cols-2 gap-8">
            {roofingMaterials.map((material, index) => (
              <div
                key={material.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {material.description}
                  </p>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
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

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <CloudRain className="inline-block h-8 w-8 text-blue-500 mr-3" />
                Warning Signs Your Roof Needs Attention
              </h2>
              <p className="text-[16px] font-semibold font-mona text-gray-600 mb-8">
                Don't wait for a major leak to address roof problems. Watch for
                these warning signs and contact us for a professional
                inspection.
              </p>
              <div className="space-y-4">
                {warningSignsData.map((sign, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <p className="text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Inspection
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707897283683-00a5b942a167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdhcm5pbmclMjByb29mfGVufDB8fDB8fHww"
                alt="Roof inspection and warning signs"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Pinkerton Construction for Roofing?
              </h2>
              <p className="text-[16px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
                Backed by more than 25 years of roofing expertise, we proudly
                serve homeowners throughout Texas with dependable solutions.
                From small repairs to complete roof installations, our team
                delivers results that stand the test of time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-[18px] font-semibold font-mona text-gray-600">
                  Fully licensed roofing contractors with comprehensive
                  insurance coverage.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  25+ Years Experience
                </h3>
                <p className="text-[18px] font-semibold font-mona text-gray-600">
                  Decades of roofing expertise with thousands of satisfied
                  customers.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600">
                  We stand behind our work with solid warranties and quality
                  assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait - Protect Your Home Today!
          </h2>
          <p className="text-[18px] font-semibold font-mona text-white mb-8 opacity-95">
            Contact us for a free roof inspection and estimate. We're here to
            keep your home safe and dry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Roof Inspection
            </button>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
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

export default RoofRepairPage;
