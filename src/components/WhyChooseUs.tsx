import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, DollarSign, Calendar, Shield, Star } from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Title animation
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

    // Staggered card animations
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Icon hover animations
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "20+ Years Experience",
      description:
        "For more than twenty years, Pinkerton Construction has been a trusted name in both residential and commercial building. Our long-standing reputation comes from completing projects of every size and type, from full-scale remodels to custom renovations. With seasoned professionals on every job, we bring consistency, reliability, and quality that only decades of hands-on experience can provide.",
      stats: "Over 500 Projects Completed",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Licensed & Insured",
      description:
        "Your peace of mind is our priority. Pinkerton Construction operates as a fully licensed and insured contractor, which means every project is protected from start to finish. We not only meet all local and state requirements, but also go above and beyond with warranties and a strong customer-first commitment. When you choose us, you choose a team that stands firmly behind the quality and safety of its work.",
      stats: "100 Percent Client Satisfaction",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Pricing",
      description:
        "High-quality construction shouldn’t come with an inflated price tag. At Pinkerton Construction, we focus on delivering exceptional craftsmanship at a fair and transparent cost. From your very first free estimate to the moment your project is complete, you can count on clear communication, no hidden charges, and unbeatable value. We believe affordability and excellence should always go hand in hand.",
      stats: "Free Estimates Provided",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-12 w-12" />,
      title: "Industry Excellence Awards",
      description:
        "Recognized for outstanding craftsmanship and customer service",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Family Owned & Operated",
      description:
        "Three generations of construction expertise and family values",
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "5-Star Customer Reviews",
      description: "Consistently rated excellent by satisfied homeowners",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Pinkerton Construction?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you’re looking for a reliable, experienced, and locally owned
            construction partner, Pinkerton Construction LLC is the trusted
            choice. With a proven track record and a commitment to quality,
            we’re here to bring your vision to life with skill, care, and
            professionalism.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div
                ref={(el) => el && (iconsRef.current[index] = el)}
                className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-6 mx-auto group-hover:bg-yellow-600 transition-colors duration-300"
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="text-yellow-600 font-semibold text-lg">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Where Every Detail Reflects Our Commitment to Excellence
            </h3>
            <p className="text-[17px] font-semibold font-mona text-gray-600 max-w-2xl mx-auto">
              Our team of expert contractors is dedicated to delivering a
              finished product that exceeds expectations without inflated costs
              or surprise fees. From the very beginning, you’ll receive a
              detailed, transparent quote, and we guarantee that the price we
              provide is the price you’ll pay. Quality craftsmanship and honest
              service, every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 text-yellow-500 rounded-full mb-4 mx-auto group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Building with Precision and Quality You Can Rely On
            </h3>
            <p className="text-[19px] font-mona font-semibold mb-8 max-w-3xl mx-auto opacity-95 text-gray-200">
              Too many homeowners have experienced the frustration of being
              overcharged and under-serviced by unreliable contractors. At
              Pinkerton Construction, we’ve built our reputation on honesty,
              transparency, and delivering exactly what we promise. Our clients
              trust us because we keep the process clear, the pricing fair, and
              the results dependable
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
