import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/reviews.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF6EF] text-[#241C18] border-t border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-[#A44A29] font-medium text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#A44A29]" />
            <span>GUEST IMPRESSIONS</span>
            <span className="w-5 h-[1.5px] bg-[#A44A29]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#241C18] leading-[1.1] mb-4">
            Words from our <span className="italic font-normal text-[#A44A29]">guests.</span>
          </h2>

          <p className="font-sans text-[#5E5147] text-sm sm:text-base leading-relaxed">
            Genuine experiences shared by local families and world travelers discovering pure vegetarian rooftop dining in Udaipur.
          </p>

          <div className="inline-flex items-center gap-1.5 text-[#D9875F] mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-semibold text-[#241C18] ml-2">4.9 / 5 Rating</span>
          </div>
        </div>

        {/* Editorial Quotes Grid with High Rounded Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 sm:p-9 rounded-[2rem] border border-[#ECE2D5] flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#A44A29]/40 transition-all duration-300 relative group text-left"
            >
              <Quote className="w-7 h-7 text-[#A44A29]/25 mb-4" />

              <blockquote className="font-serif text-base sm:text-lg text-[#2E241F] font-normal leading-relaxed italic mb-8">
                “{rev.review}”
              </blockquote>

              <div className="flex items-center justify-between pt-5 border-t border-[#F2ECE3]">
                <div>
                  <h3 className="font-serif text-base text-[#241C18] font-medium">
                    {rev.author}
                  </h3>
                  <p className="text-xs font-sans text-[#7A6C62]">
                    {rev.location}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-sans tracking-wider uppercase font-semibold text-[#A44A29] px-3 py-1 bg-[#FAF3E8] border border-[#ECE2D5] rounded-full">
                    {rev.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pure vegetarian assurance bar */}
        <div className="mt-14 text-center text-xs text-[#7A6C62] font-sans tracking-wider">
          <span>RATED 4.9 / 5 ON GOOGLE DINING • 100% PURE VEGETARIAN & JAIN ESTABLISHMENT</span>
        </div>

      </div>
    </section>
  );
};

