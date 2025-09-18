import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Home,
  Plus,
  Users,
  TrendingUp,
  Lightbulb,
  Building,
} from "lucide-react";

const HomeAdditionsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const additionTypesRef = useRef<HTMLDivElement>(null);

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
      icon: <Plus className="h-8 w-8" />,
      title: "More Living Space",
      description:
        "Add valuable square footage to your home without the cost and hassle of moving.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Home Value",
      description:
        "Well-planned additions can increase your home's value by 60-80% of the investment.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Growing Family Needs",
      description:
        "Accommodate your growing family with additional bedrooms, bathrooms, or living areas.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Custom Solutions",
      description:
        "Design additions that perfectly match your lifestyle and architectural style.",
    },
  ];

  const additionTypes = [
    {
      title: "Room Additions",
      description:
        "Add bedrooms, bathrooms, or family rooms that seamlessly blend with your existing home.",
      image:
        "https://images.unsplash.com/photo-1721522281545-fad32dd5107a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb20lMjBBZGRpdGlvbnN8ZW58MHx8MHx8fDA%3D",
      features: [
        "Master suite additions",
        "Family room expansions",
        "Home office spaces",
        "Guest bedrooms",
      ],
    },
    {
      title: "Second Story Additions",
      description:
        "Maximize your lot space by building up instead of out with a second story addition.",
      image:
        "https://images.unsplash.com/photo-1695324324517-dad57aed64de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Vjb25kJTIwU3RvcnklMjBBZGRpdGlvbnN8ZW58MHx8MHx8fDA%3D",
      features: [
        "Full second stories",
        "Partial upper levels",
        "Dormer additions",
        "Structural reinforcement",
      ],
    },
    {
      title: "Kitchen Extensions",
      description:
        "Expand your kitchen to create a more functional cooking and entertaining space.",
      image:
        "https://media.istockphoto.com/id/1466145748/photo/kitchen-fitters-installing-some-cabinets.webp?a=1&b=1&s=612x612&w=0&k=20&c=NKSeGe9qCiqCYG_bCNBc4U7FhLCy8HgsaREdlPMVwUw=",
      features: [
        "Kitchen islands",
        "Breakfast nooks",
        "Pantry additions",
        "Open concept designs",
      ],
    },
    {
      title: "Outdoor Living Spaces",
      description:
        "Extend your living space outdoors with covered patios, decks, and porches.",
      image:
        "https://images.unsplash.com/photo-1600210492090-a159ffa3aeaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vciUyMGxpdmluZyUyMHNwYWNlfGVufDB8fDB8fHww",
      features: [
        "Covered patios",
        "Screened porches",
        "Deck expansions",
        "Outdoor kitchens",
      ],
    },
  ];

  const planningProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We discuss your needs, budget, and vision for your home addition.",
    },
    {
      step: "02",
      title: "Design & Engineering",
      description:
        "Our team creates detailed plans and handles all structural engineering requirements.",
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description:
        "We obtain all necessary permits and ensure compliance with local building codes.",
    },
    {
      step: "04",
      title: "Foundation & Framing",
      description:
        "Professional foundation work and framing that integrates with your existing structure.",
    },
    {
      step: "05",
      title: "Systems & Finishes",
      description:
        "Installation of electrical, plumbing, HVAC, and all interior and exterior finishes.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=1080&fit=crop"
            alt="Home Addition"
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
                Home Additions
              </h1>
              <p className="text-[18px] font-semibold font-mona text-gray-200 mb-8 leading-relaxed">
                Expand your living space and enhance your lifestyle with
                expertly crafted home additions. Whether you need more bedrooms,
                a larger kitchen, or a home office, we create seamless additions
                that look like they've always been part of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Plan Your Addition
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Addition Ideas
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                alt="Beautiful home addition"
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
              Why Choose Home Additions?
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              Home additions offer the perfect solution for growing families and
              changing lifestyle needs without the expense and stress of moving.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
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

      {/* Types of Additions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Home Additions
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              From single rooms to entire second stories, we create additions
              that perfectly complement your existing home.
            </p>
          </div>

          <div ref={additionTypesRef} className="grid md:grid-cols-2 gap-8">
            {additionTypes.map((addition, index) => (
              <div
                key={addition.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={addition.image}
                  alt={addition.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {addition.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {addition.description}
                  </p>
                  <ul className="space-y-2">
                    {addition.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
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

      {/* Planning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Addition Planning Process
            </h2>
            <p className="text-[18px] font-semibold font-mona text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive process to ensure your home addition is
              perfectly planned and executed.
            </p>
          </div>

          <div className="space-y-12">
            {planningProcess.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0
                        ? "1581858726788-75bc0f6a952d"
                        : index === 1
                          ? "1504307651254-35680f356dfd"
                          : index === 2
                            ? "1558618666-fcd25c85cd64"
                            : index === 3
                              ? "1556909114-f6e7ad7d3136"
                              : "1560472354-b33ff0c44a43"
                    }?w=500&h=300&fit=crop`}
                    alt={step.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <Building className="inline-block h-8 w-8 text-emerald-500 mr-3" />
                Important Considerations
              </h2>
              <p className="text-[16px] font-semibold font-mona text-gray-600 mb-8">
                Successful home additions require careful planning and
                consideration of various factors to ensure the best results for
                your investment.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Architectural Harmony
                  </h3>
                  <p className="text-[18px] font-semibold font-mona text-gray-600">
                    Ensuring your addition matches your home's existing style
                    and maintains architectural integrity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Structural Integration
                  </h3>
                  <p className="text-[18px] font-semibold font-mona text-gray-600">
                    Proper engineering and construction techniques to seamlessly
                    integrate new with existing structure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Code Compliance
                  </h3>
                  <p className="text-[18px] font-semibold font-mona text-gray-600">
                    Meeting all local building codes, setback requirements, and
                    permit regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    System Integration
                  </h3>
                  <p className="text-[18px] font-semibold font-mona text-gray-600">
                    Extending electrical, plumbing, and HVAC systems to serve
                    your new addition efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1565688527174-775059ac429c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEluaXRpYWwlMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D"
                alt="Home addition planning"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Expand Your Living Space?
          </h2>
          <p className="text-[18px] font-semibold font-mona text-white mb-8 opacity-95">
            Let's discuss your home addition ideas and create the extra space
            your family needs. Contact us for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Plan Your Home Addition
            </button>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
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

export default HomeAdditionsPage;
