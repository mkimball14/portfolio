import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  // Duplicate projects to ensure smooth 3D looping since we only has 3 items
  const loopProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section className="py-16 bg-black/20 overflow-hidden relative perspective-1000">
      <h2 className="sr-only">Project Carousel</h2>

      <div className="container mx-auto px-4 relative">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={2500} // Continuous speed
          coverflowEffect={{
            rotate: 20,      // Reduced rotation for a "wall" feel
            stretch: 50,     // Pull slides closer to overlap slightly
            depth: 350,      // Deep depth for the 3D curve
            modifier: 1,
            slideShadows: true, // Shadows help the depth perception
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Keep rotating even on hover for "constant" motion
            reverseDirection: true, // Counter-clockwise rotation
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full py-12 [&_.swiper-wrapper]:transition-timing-function-linear"
        >
          {loopProjects.map((project, index) => (
            <SwiperSlide
              key={`${project.id}-${index}`}
              className="w-[400px] h-[300px] sm:w-[500px] sm:h-[350px]" // Wider landscape aspect ratio like the image
            >
              <Link
                to={`/project/${project.id}`}
                className="block w-full h-full relative overflow-hidden group transition-all duration-500 bg-deep-navy shadow-[0_0_25px_rgba(0,0,0,0.5)] border-2 border-transparent hover:border-neon-cyan/50"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-orbitron font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neon-cyan text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-pagination-bullet {
          background-color: theme('colors.gray.500');
        }
        .swiper-pagination-bullet-active {
          background-color: theme('colors.neon-cyan');
        }
      `}</style>
    </section>
  );
};

export default ProjectCarousel;
