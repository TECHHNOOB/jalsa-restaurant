import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { JalsaImage } from '../data/assets.ts';

interface LightboxProps {
  image: JalsaImage | null;
  images: JalsaImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  image,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar with Counter & Close */}
      <div
        className="flex items-center justify-between text-stone-300 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-sans tracking-[0.25em] text-[#D9875F] uppercase font-medium">
            JALSA UDAIPUR ARCHIVE
          </span>
          <span className="text-stone-600">•</span>
          <span className="text-xs font-sans tracking-widest text-stone-400">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white transition-colors cursor-pointer rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Close Lightbox"
          id="lightbox-close-btn"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container & Navigation Arrows */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Arrow */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-stone-300 hover:text-white border border-white/10 transition-all cursor-pointer"
          aria-label="Previous Image"
          id="lightbox-prev-btn"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="max-w-5xl max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center">
          <img
            src={image.url}
            alt={image.alt}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Next Arrow */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-stone-300 hover:text-white border border-white/10 transition-all cursor-pointer"
          aria-label="Next Image"
          id="lightbox-next-btn"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        className="text-center max-w-2xl mx-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-serif text-lg sm:text-xl text-stone-100 font-normal">
          {image.title}
        </h4>
        {image.caption && (
          <p className="font-sans text-xs sm:text-sm text-stone-400 font-light mt-1">
            {image.caption}
          </p>
        )}
      </div>
    </div>
  );
};
