import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Introduction } from './components/Introduction.tsx';
import { TheView } from './components/TheView.tsx';
import { FoodSection } from './components/FoodSection.tsx';
import { SignatureDishes } from './components/SignatureDishes.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { EventsSection } from './components/EventsSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { ReservationModal } from './components/ReservationModal.tsx';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Casual Dining');

  const handleOpenBooking = (occasion?: string) => {
    setSelectedOccasion(occasion || 'Casual Dining');
    setReservationModalOpen(true);
  };

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverStory = () => {
    const storyEl = document.getElementById('our-story');
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExperienceClick = () => {
    const expEl = document.getElementById('experience');
    if (expEl) {
      expEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#241C18] font-sans antialiased selection:bg-[#A44A29]/20 selection:text-[#451A14]">
      {/* Top Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Section 01: Hero with Real Lake View Image */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToMenu={handleScrollToMenu}
        />

        {/* Section 02: Introduction with Asymmetric Editorial Layout */}
        <Introduction onDiscoverStory={handleDiscoverStory} />

        {/* Section 03: The View (Cinematic lake view photograph) */}
        <TheView onExperienceClick={handleExperienceClick} />

        {/* Section 04: Food (Editorial Menu & Real Dishes) */}
        <FoodSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 05: Signature Food (Real Food Photography from WordPress) */}
        <SignatureDishes onOpenBooking={() => handleOpenBooking()} />

        {/* Section 06: Hospitality Experience (3 Real Photography Cards) */}
        <ExperienceSection onOpenBooking={handleOpenBooking} />

        {/* Section 07: About Jalsa (Human, concise story) */}
        <AboutSection />

        {/* Section 08: Gallery (Curated Editorial Masonry Grid + Lightbox) */}
        <GallerySection />

        {/* Section 09: Events (Birthdays, Anniversaries, Gatherings) */}
        <EventsSection onPlanEvent={handleOpenBooking} />

        {/* Section 10: Genuine Customer Reviews */}
        <ReviewsSection />

        {/* Section 11: Location & Operating Hours */}
        <LocationSection />

        {/* Section 12: Final Call to Action with Sunset Image */}
        <FinalCTA
          onOpenBooking={() => handleOpenBooking()}
          onScrollToMenu={handleScrollToMenu}
        />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        defaultOccasion={selectedOccasion}
      />
    </div>
  );
}
