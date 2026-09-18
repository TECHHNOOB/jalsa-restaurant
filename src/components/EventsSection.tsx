import React from 'react';
import { Sparkles, Calendar, Users, Wine, Heart, Gift, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface EventsSectionProps {
  onPlanEvent: (occasion: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onPlanEvent }) => {
  const eventTypes = [
    {
      title: 'Birthdays',
      desc: 'Celebrate milestones with rooftop lake views, personalized seating, and dedicated dessert arrangements.',
      icon: Gift,
    },
    {
      title: 'Anniversaries',
      desc: 'Quiet romantic tables set along the terrace railing as dusk falls over Lake Pichola and the palace.',
      icon: Heart,
    },
    {
      title: 'Family Gatherings',
      desc: 'Generous multi-table settings designed for cheerful reunions, sharing thalis, and creating cherished memories.',
      icon: Users,
    },
    {
      title: 'Private Rooftop Area',
      desc: 'Reserved terrace sections offering exclusivity and dedicated hospitality for you and your guests.',
      icon: Wine,
    },
  ];

  return (
    <section id="events" className="py-20 sm:py-28 bg-[#241A16] text-[#FAF6EF] border-t border-[#3D2E27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Occasions List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#D9875F] font-medium text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#D9875F]" />
              <span>GATHERINGS & CELEBRATIONS</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-5">
              Make it a <span className="italic font-normal text-[#D9875F]">Jalsa.</span>
            </h2>

            <p className="font-sans text-[#B3A295] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              In Hindi, “Jalsa” means a joyous celebration. Whether gathering your closest family or
              marking life’s key milestones, our open-sky lake terrace provides a picturesque and
              meaningful backdrop.
            </p>

            {/* Event Occasion Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {eventTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    onClick={() => onPlanEvent(item.title)}
                    className="p-5 rounded-2xl bg-[#2D211D] border border-[#3D2E27] hover:border-[#D9875F]/60 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#1B1411] text-[#D9875F] group-hover:text-white group-hover:bg-[#A44A29] flex items-center justify-center transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg text-white font-medium">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs text-[#A8988C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                id="events-plan-event-btn"
                onClick={() => onPlanEvent('Special Celebration')}
                className="px-8 py-3.5 bg-[#A44A29] hover:bg-[#8F3E20] text-white tracking-wider text-xs uppercase font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Your Event</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Real Restaurant Event Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] border-4 border-[#3D2E27] bg-[#16100D] aspect-[4/5]">
                <img
                  src={ASSETS.events.url}
                  alt={ASSETS.events.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Direct call assistance badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-6 z-20 bg-[#1F1714]/95 text-stone-200 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#3D2E27] shadow-lg text-left">
                <span className="block text-[10px] tracking-widest uppercase text-[#D9875F] font-semibold">
                  GROUP RESERVATIONS
                </span>
                <span className="font-serif text-sm text-stone-200">
                  Direct Line: +91 8619845277
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

