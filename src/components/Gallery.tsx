import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const categories = ['All', 'Kitchen', 'Bathroom', 'Exterior', 'Commercial', 'Additions'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Kitchen',
      title: 'Modern Kitchen Renovation',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      description: 'Complete kitchen transformation with custom cabinets and modern appliances'
    },
    {
      id: 2,
      category: 'Bathroom',
      title: 'Luxury Bathroom Remodel',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
      description: 'Elegant bathroom renovation with premium fixtures and tile work'
    },
    {
      id: 3,
      category: 'Exterior',
      title: 'Home Exterior Renovation',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop',
      description: 'Complete exterior makeover with new siding and modern windows'
    },
    {
      id: 4,
      category: 'Commercial',
      title: 'Office Building Construction',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'New commercial office space with modern design elements'
    },
    {
      id: 5,
      category: 'Kitchen',
      title: 'Traditional Kitchen Design',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
      description: 'Classic kitchen renovation with traditional styling'
    },
    {
      id: 6,
      category: 'Additions',
      title: 'Home Addition Project',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      description: 'Seamless home addition that expanded living space'
    },
    {
      id: 7,
      category: 'Exterior',
      title: 'Roof Replacement',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      description: 'Professional roof replacement with high-quality materials'
    },
    {
      id: 8,
      category: 'Commercial',
      title: 'Retail Space Renovation',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Modern retail space transformation for improved customer experience'
    },
    {
      id: 9,
      category: 'Bathroom',
      title: 'Spa-Style Bathroom',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop',
      description: 'Luxurious spa-inspired bathroom with premium finishes'
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    // Title and filters entrance
    gsap.fromTo([titleRef.current, filtersRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Sequential image fade-in
    gsap.fromTo(imageRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  useEffect(() => {
    // Re-animate images when category changes
    if (imageRefs.current.length > 0) {
      gsap.fromTo(imageRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    // Fade out current images
    gsap.to(imageRefs.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setSelectedCategory(category);
      }
    });
  };

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(index);
    setSelectedImage(item);

    // Lightbox entrance animation
    if (lightboxRef.current) {
      gsap.fromTo(lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(lightboxRef.current.querySelector('.lightbox-content'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          delay: 0.1
        }
      );
    }
  };

  const closeLightbox = () => {
    if (lightboxRef.current) {
      gsap.to(lightboxRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setSelectedImage(null)
      });
    }
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % filteredItems.length
      : (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;

    const content = lightboxRef.current?.querySelector('.lightbox-content');
    if (content) {
      gsap.to(content, {
        x: direction === 'next' ? -100 : 100,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setLightboxIndex(newIndex);
          setSelectedImage(filteredItems[newIndex]);

          gsap.fromTo(content,
            { x: direction === 'next' ? 100 : -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        }
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and see the quality craftsmanship
            that sets Pinkerton Construction apart.
          </p>
        </div>

        {/* Category Filters */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => el && (imageRefs.current[index] = el)}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with our expert construction and remodeling services.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
