import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/clinicData';

export const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS_LIST.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const visibleIndices = [
    activeIndex,
    (activeIndex + 1) % total,
    (activeIndex + 2) % total,
  ];

  return (
    <div
      className="space-y-8"
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient Testimonials"
    >
      {/* Controls Bar */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
            Patient Voices · ABC Clinic
          </p>
          <h2 className="heading-section text-[#213245]">
            Patient Experience &amp; Feedback
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D1D8E0] bg-white text-[#213245] hover:border-[#025EC1] hover:bg-[#025EC1] hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D1D8E0] bg-white text-[#213245] hover:border-[#025EC1] hover:bg-[#025EC1] hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Cards Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleIndices.map((idx, slot) => {
          const item = TESTIMONIALS_LIST[idx];
          return (
            <article
              key={`${item.id}-${slot}`}
              className={`clinic-card p-7 flex flex-col justify-between ${
                slot === 1 ? 'hidden md:flex' : slot === 2 ? 'hidden lg:flex' : 'flex'
              }`}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(2, 94, 193, 0.08)', color: '#025EC1' }}
                    aria-hidden="true"
                  >
                    <Quote className="h-5 w-5" />
                  </span>
                  <span className="text-[13px] font-medium text-[#59616B]">
                    {item.date}
                  </span>
                </div>

                <p className="text-[16px] leading-[27px] text-[#213245] font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-[#213245]/8">
                <p className="text-[16px] font-bold text-[#213245]">{item.patientName}</p>
                <p className="mt-1 text-[13px] font-medium text-[#59616B]">
                  {item.serviceTag} <span aria-hidden="true">·</span> {item.location}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
        {TESTIMONIALS_LIST.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            aria-label={`View testimonial ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx ? 'w-8 bg-[#025EC1]' : 'w-2.5 bg-[#D1D8E0] hover:bg-[#025EC1]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
