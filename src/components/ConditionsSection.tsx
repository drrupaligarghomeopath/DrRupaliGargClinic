import React, { useState } from 'react';
import { CONDITIONS_LIST, getWhatsAppUrl } from '../data/clinicData';
import { RoutePath } from '../types';
import { ShieldAlert, HeartHandshake, Check, MessageSquare, Calendar, Sparkles } from 'lucide-react';

interface ConditionsSectionProps {
  onNavigate: (route: RoutePath) => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(CONDITIONS_LIST.map((c) => c.category)))];

  const filteredConditions =
    selectedCategory === 'all'
      ? CONDITIONS_LIST
      : CONDITIONS_LIST.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-[#faf9f6]" aria-labelledby="conditions-heading">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4dfd9]/70 px-3.5 py-1 rounded-full text-xs font-bold text-[#0d211a] uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#2c4a3e]" />
            <span>Holistic Wellness & Support Areas</span>
          </div>
          <h2 id="conditions-heading" className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#1a1c1e] mb-4">
            Conditions We Support With Homeopathy
          </h2>
          <p className="font-sans text-base text-[#4a4b46] leading-relaxed">
            Classical homeopathy focuses on treating the individual experiencing the disease, strengthening vitality and re-establishing equilibrium.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                selectedCategory === cat
                  ? 'bg-[#2c4a3e] text-white shadow-sm'
                  : 'bg-[#efece6] text-[#4a4b46] hover:bg-[#e3e0d9]'
              }`}
            >
              {cat === 'all' ? 'All Areas' : cat}
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredConditions.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#e5e3df] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c7047] bg-[#f5e8d2]/60 px-3 py-1 rounded-full inline-block mb-3">
                  {item.category}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e] mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-[#4a4b46] leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="bg-[#f5f4ef] p-3.5 rounded-2xl border border-[#e5e3df] mb-5">
                  <p className="text-xs font-semibold text-[#2c4a3e] mb-1">
                    Holistic Approach:
                  </p>
                  <p className="text-xs text-[#4a4b46] leading-relaxed">
                    {item.holisticApproach}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#1a1c1e] mb-2 uppercase tracking-wide">
                    Common Concerns Supported:
                  </p>
                  <ul className="space-y-1.5">
                    {item.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#4a4b46]">
                        <Check className="w-3.5 h-3.5 text-[#2c4a3e] shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Quick Trigger */}
              <div className="pt-6 mt-6 border-t border-[#e5e3df] flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    onNavigate('book-appointment');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#2c4a3e] hover:underline"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hello Dr. Roopali, I am looking for holistic support regarding ${item.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss Case</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Healthcare Disclaimer Note */}
        <div className="mt-12 max-w-2xl mx-auto bg-[#e6e8e0]/60 border border-[#cacdc4] p-4 rounded-2xl text-center text-xs text-[#1a1c18] leading-relaxed">
          <p>
            <strong>Note on Responsible Care:</strong> Homeopathy is a supportive, holistic therapeutic system aimed at strengthening individual vitality. It does not replace emergency medical procedures or critical allopathic interventions where urgent hospital care is required.
          </p>
        </div>
      </div>
    </section>
  );
};
