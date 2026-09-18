import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { ASSETS, JalsaImage } from '../data/assets.ts';
import { Lightbox } from './Lightbox.tsx';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = ASSETS.gallery;

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] border-t border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#A44A29]" />
              <span>PHOTOGRAPHY ARCHIVE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#241C18] leading-[1.1]">
              Life at <span className="italic font-normal text-[#A44A29]">Jalsa.</span>
            </h2>
          </div>

          <p className="font-sans text-[#5E5147] text-sm sm:text-base max-w-md leading-relaxed text-left md:text-right">
            Authentic photographs capturing rooftop views, sunset horizons, and pure vegetarian dining overlooking Lake Pichola.
          </p>
        </div>

        {/* Filter Pills matching reference */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'ALL MOMENTS' },
            { id: 'lake-view', label: 'LAKE & HILL VIEWS' },
            { id: 'rooftop', label: 'ROOFTOP TERRACE' },
            { id: 'food', label: 'PURE VEG DELIGHTS' },
            { id: 'evening', label: 'SUNSET & NIGHT DINING' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 text-xs font-sans tracking-wider uppercase transition-all rounded-full cursor-pointer font-medium ${
                activeFilter === tab.id
                  ? 'bg-[#451A14] text-white shadow-md'
                  : 'bg-white text-[#5E5147] hover:text-[#241C18] border border-[#ECE2D5] hover:border-[#A44A29]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modern Fluid Multi-Column Masonry (Zero Gaps, Perfect Pinterest-Style Packing) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filteredImages.map((image: JalsaImage, index: number) => {
            const categoryLabel =
              image.category === 'lake-view'
                ? 'LAKE VIEW'
                : image.category === 'rooftop'
                ? 'ROOFTOP'
                : image.category === 'food'
                ? 'PURE VEG CULINARY'
                : 'SUNSET & NIGHT';

            return (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(index)}
                className="break-inside-avoid mb-6 group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer bg-[#241C18] border border-[#ECE2D5]/80 transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for Legibility & Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                  {/* Top-Right Floating Zoom Pill */}
                  <div className="absolute top-4 right-4 z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2.5 bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md border border-white/20 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Information Card */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-white text-left flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] tracking-widest text-[#E6A177] uppercase font-sans font-semibold px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15">
                        {categoryLabel}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug drop-shadow-sm">
                      {image.title}
                    </h4>

                    {image.caption && (
                      <p className="font-sans text-xs sm:text-[13px] text-stone-300 font-light mt-1.5 line-clamp-2 opacity-85 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                        {image.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Viewer */}
      {lightboxIndex !== null && (
        <Lightbox
          image={filteredImages[lightboxIndex]}
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};

