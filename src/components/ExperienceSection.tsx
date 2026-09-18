import React from 'react';
import { ASSETS } from '../data/assets.ts';
import { ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenBooking: (occasion?: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const experiences = [
    {
      id: 'rooftop',
      title: 'Rooftop Dining',
      subtitle: 'Lake Pichola & Aravali Hills',
      image: ASSETS.experience.rooftop.url,
      alt: ASSETS.experience.rooftop.alt,
      description:
        'Dine in open air as the sun settles behind the Monsoon Palace. Gentle lake breezes and starlit horizons turn every dinner into an enduring Udaipur memory.',
      tag: 'Sunset & Open Air',
    },
    {
      id: 'family',
      title: 'Family Gatherings',
      subtitle: 'Comfortable, Warm & Pure Veg',
      image: ASSETS.experience.family.url,
      alt: ASSETS.experience.family.alt,
      description:
        'Spacious table settings crafted for shared thalis, multi-generational gatherings, and long leisurely lunches where everyone feels right at home.',
      tag: 'Generous Tables',
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      subtitle: 'Birthdays & Anniversaries',
      image: ASSETS.experience.celebrations.url,
      alt: ASSETS.experience.celebrations.alt,
      description:
        'From intimate candlelit anniversary dinners to vibrant family celebrations, our team curates your special evening with personalized lake-view hospitality.',
      tag: 'Special Occasions',
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#241A16] text-[#FAF6EF] border-t border-[#3D2E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3 text-[#D9875F] font-medium text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#D9875F]" />
            <span>HOSPITALITY & AMBIENCE</span>
            <span className="w-5 h-[1.5px] bg-[#D9875F]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-5">
            More than a <span className="italic font-normal text-[#D9875F]">meal.</span>
          </h2>

          <p className="font-sans text-[#B3A295] text-sm sm:text-base leading-relaxed">
            Jalsa is where you come for honest cooking, calm waters, and the genuine warmth of Udaipur hospitality.
          </p>
        </div>

        {/* 3 Visual Photographic Experience Cards with High Rounded Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col bg-[#2D211D] rounded-[2rem] overflow-hidden border border-[#3D2E27] shadow-sm hover:border-[#D9875F]/40 transition-all duration-300"
            >
              {/* Real Photography Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1B1411]">
                <img
                  src={exp.image}
                  alt={exp.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-[10px] tracking-wider uppercase font-sans text-[#FAF6EF] px-3 py-1 rounded-full border border-white/10">
                  {exp.tag}
                </div>
              </div>

              {/* Editorial Text Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h3 className="font-serif text-2xl text-white tracking-tight font-medium mb-1 group-hover:text-[#D9875F] transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-sans text-[#D9875F] tracking-wider uppercase block mb-3 font-medium">
                    {exp.subtitle}
                  </span>
                  <p className="font-sans text-[#A8988C] text-xs sm:text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking(exp.title)}
                  className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium text-stone-200 group-hover:text-[#D9875F] transition-colors cursor-pointer w-fit"
                >
                  <span>Reserve this setting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

