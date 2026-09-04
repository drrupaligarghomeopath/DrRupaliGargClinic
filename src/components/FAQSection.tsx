import React, { useState } from 'react';
import { FAQ_LIST, getWhatsAppUrl, CLINIC_INFO } from '../data/clinicData';
import { RoutePath } from '../types';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';

interface FAQSectionProps {
  onNavigate?: (route: RoutePath) => void;
  fullPage?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate, fullPage = false }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['all', 'General', 'Consultation', 'Homeopathy', 'Clinic & Booking'];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 bg-[#faf9f6]" aria-labelledby="faq-heading">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#d4dfd9]/70 px-3.5 py-1 rounded-full text-xs font-bold text-[#0d211a] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#2c4a3e]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#1a1c1e] mb-4">
            Everything You Need to Know
          </h2>
          <p className="font-sans text-base text-[#4a4b46] leading-relaxed">
            Find clear answers about homeopathic constitutional treatment, the MPESS healing approach, clinic location in Greater Noida, and consultation scheduling.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                  activeCategory === cat
                    ? 'bg-[#2c4a3e] text-white shadow-sm'
                    : 'bg-[#efece6] text-[#4a4b46] hover:bg-[#e3e0d9]'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-white border border-[#e5e3df] px-3.5 py-1.5 rounded-full text-xs text-[#1a1c1e] placeholder:text-[#787972] outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e]"
              aria-label="Search FAQs"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" role="region" aria-label="FAQ Accordion">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#ffffff] rounded-2xl border border-[#e5e3df] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#1a1c1e] hover:text-[#2c4a3e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a3e]"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#efece6] flex items-center justify-center shrink-0 text-[#2c4a3e] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#d4dfd9]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 pt-0 font-sans text-sm sm:text-base text-[#4a4b46] leading-relaxed border-t border-[#f5f4ef] animate-fade-in"
                  >
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-[#e5e3df] p-6 text-sm text-[#787972]">
              No matching questions found for "{searchQuery}". You can ask us directly!
            </div>
          )}
        </div>

        {/* Still have questions helper block */}
        <div className="mt-12 bg-[#e6e8e0]/60 border border-[#cacdc4] p-6 sm:p-8 rounded-3xl text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a1c1e] mb-2">
            Have a Specific Health Question?
          </h3>
          <p className="text-xs sm:text-sm text-[#464841] mb-5 max-w-lg mx-auto">
            Dr. Roopali and our clinic team are happy to answer any questions about case taking, appointment slots, or homeopathic treatment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={getWhatsAppUrl('Hello Dr. Roopali, I have a question regarding consultation and treatment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#20b858] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#2c4a3e] text-[#2c4a3e] px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#2c4a3e] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
