import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Home,
  CheckCircle,
  Calendar,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const ResidentialRemodelingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

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
      icon: <Home className="h-8 w-8" />,
      title: "Increase Home Value",
      description:
        "Quality remodeling can increase your home's value by 15-20% while improving your daily living experience.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Craftsmanship",
      description:
        "Our skilled craftsmen use premium materials and proven techniques to ensure lasting results.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "On-Time Completion",
      description:
        "We stick to our schedule and complete projects on time, minimizing disruption to your daily life.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Full-Service Team",
      description:
        "From design to completion, our comprehensive team handles every aspect of your remodeling project.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We meet with you to discuss your vision, needs, and budget for your remodeling project.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team creates detailed plans and 3D renderings to help you visualize the final result.",
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description:
        "We handle all necessary permits and approvals to ensure your project meets local building codes.",
    },
    {
      step: "04",
      title: "Construction",
      description:
        "Our skilled craftsmen bring your vision to life with quality materials and expert workmanship.",
    },
    {
      step: "05",
      title: "Final Walkthrough",
      description:
        "We conduct a thorough walkthrough to ensure every detail meets our high standards and your expectations.",
    },
  ];

  const projectGallery = [
    {
      title: "Modern Kitchen Renovation",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description:
        "Complete kitchen transformation with custom cabinets and modern appliances",
    },
    {
      title: "Master Bathroom Remodel",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
      description:
        "Luxurious spa-like bathroom with premium fixtures and finishes",
    },
    {
      title: "Living Room Extension",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description:
        "Open concept living space with vaulted ceilings and natural light",
    },
    {
      title: "Whole Home Renovation",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      description:
        "Complete home transformation maintaining character while adding modern amenities",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1610264146566-c233419fb1c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGNvbnN0cnVjdGlvbiUyMHRlYW18ZW58MHx8MHx8fDA%3D"
            alt="Residential Remodeling"
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
                Residential Remodeling
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transform your house into the home of your dreams with our
                comprehensive residential remodeling services. From single rooms
                to whole-home renovations, we bring your vision to life with
                quality craftsmanship and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Estimate
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Beautiful remodeled home interior"
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
              Why Choose Our Residential Remodeling Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of hands-on experience and the latest construction
              techniques, we deliver results that not only meet but consistently
              exceed client expectations.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
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

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Remodeling Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team follows a proven step-by-step process to ensure every
              remodeling project is delivered on schedule, within budget, and
              crafted to match your exact vision and specifications.
            </p>
          </div>

          <div ref={processRef} className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-yellow-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Residential Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent residential remodeling projects that
              highlight the quality, attention to detail, and craftsmanship we
              bring to every home we work on.
            </p>
          </div>

          <div ref={galleryRef} className="grid md:grid-cols-2 gap-8">
            {projectGallery.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Remodeling Project?
          </h2>
          <p className="text-xl text-white mb-8 opacity-95">
            Ready to bring your vision to life? Let’s transform your house into
            the home you’ve always dreamed of. Reach out today to schedule your
            free consultation and take the first step toward your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
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

export default ResidentialRemodelingPage;
