import React, { useState } from 'react';
import { MPESS_DIMENSIONS } from '../data/clinicData';
import { RoutePath } from '../types';
import { Sparkles, Brain, Activity, Heart, Compass, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface MPESSSectionProps {
  onNavigate?: (route: RoutePath) => void;
  showExploreMore?: boolean;
}

export const MPESSSection: React.FC<MPESSSectionProps> = ({ onNavigate, showExploreMore = true }) => {
  const [activeDimensionId, setActiveDimensionId] = useState<string>('mind');

  const dimensionIcons: Record<string, React.ReactNode> = {
    mind: <Brain className="w-5 h-5" />,
    physical: <Activity className="w-5 h-5" />,
    emotional: <Heart className="w-5 h-5" />,
    spiritual: <Compass className="w-5 h-5" />,
    social: <Users className="w-5 h-5" />,
  };

  const currentDimension = MPESS_DIMENSIONS.find((d) => d.id === activeDimensionId) || MPESS_DIMENSIONS[0];

  return (
    <section className="py-16 md:py-24 bg-[#faf9f6]" aria-labelledby="mpess-heading">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4dfd9]/70 px-3.5 py-1 rounded-full text-xs font-bold text-[#0d211a] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2c4a3e]" />
            <span>Holistic 5-Pillar Framework</span>
          </div>
          <h2 id="mpess-heading" className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#1a1c1e] mb-4">
            The MPESS Healing Approach
          </h2>
          <p className="font-sans text-base text-[#4a4b46] leading-relaxed">
            True healing happens when all layers of your existence work in symphony. Dr. Roopali’s MPESS approach systematically investigates five interdependent dimensions to restore complete vitality.
          </p>
        </div>

        {/* Dimension Selection Pills / Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10" role="tablist" aria-label="MPESS Dimensions">
          {MPESS_DIMENSIONS.map((dim) => {
            const isSelected = dim.id === activeDimensionId;
            return (
              <button
                key={dim.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`mpess-panel-${dim.id}`}
                id={`mpess-tab-${dim.id}`}
                onClick={() => setActiveDimensionId(dim.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#2c4a3e] text-white shadow-[0_6px_20px_rgba(44,74,62,0.25)] scale-102'
                    : 'bg-[#efece6] text-[#4a4b46] hover:bg-[#e3e0d9] hover:text-[#1a1c1e]'
                }`}
              >
                <span>{dimensionIcons[dim.id]}</span>
                <span>{dim.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Interactive Display Card */}
        <div
          id={`mpess-panel-${currentDimension.id}`}
          role="tabpanel"
          aria-labelledby={`mpess-tab-${currentDimension.id}`}
          className="bg-[#ffffff] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(44,74,62,0.06)] border border-[#e5e3df] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Summary and Philosophy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#d4dfd9] text-[#2c4a3e] flex items-center justify-center shadow-sm">
                  {dimensionIcons[currentDimension.id]}
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                    {currentDimension.name} Wellness
                  </h3>
                  <p className="text-xs font-semibold text-[#8c7047] uppercase tracking-wider">
                    {currentDimension.shortSubtitle}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#4a4b46] leading-relaxed mb-6">
                {currentDimension.description}
              </p>

              {/* Homeopathic Synergy Box */}
              <div className="bg-[#e6e8e0]/60 p-4 sm:p-5 rounded-2xl border border-[#cacdc4] mb-6">
                <p className="text-xs font-bold text-[#1a1c18] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span>🌿</span> Homeopathic Synergy in Case Analysis
                </p>
                <p className="text-xs sm:text-sm text-[#464841] leading-relaxed">
                  {currentDimension.homeopathicSynergy}
                </p>
              </div>

              {showExploreMore && onNavigate && (
                <div>
                  <button
                    onClick={() => {
                      onNavigate('mpess-approach');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#2c4a3e] hover:text-[#233b32] hover:underline underline-offset-4 tracking-wider uppercase"
                  >
                    <span>Read Full MPESS Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Key Focus Checklist */}
            <div className="lg:col-span-5 bg-[#faf9f6] p-6 sm:p-8 rounded-2xl border border-[#e5e3df]">
              <h4 className="font-serif text-lg font-bold text-[#1a1c1e] mb-4">
                Clinical Focus in This Dimension
              </h4>
              <ul className="space-y-3.5">
                {currentDimension.clinicalFocus.map((focus, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#1a1c1e]">
                    <CheckCircle className="w-4 h-4 text-[#2c4a3e] shrink-0 mt-0.5" />
                    <span className="leading-snug">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5 Cards Mini Grid Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {MPESS_DIMENSIONS.map((dim) => {
            const isSelected = dim.id === activeDimensionId;
            return (
              <div
                key={dim.id}
                onClick={() => setActiveDimensionId(dim.id)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  isSelected
                    ? 'bg-[#e6e8e0] border-[#2c4a3e] shadow-sm ring-1 ring-[#2c4a3e]'
                    : 'bg-[#efece6] border-transparent hover:bg-[#e3e0d9]'
                }`}
              >
                <p className="font-serif font-bold text-sm text-[#1a1c1e] mb-1">{dim.name}</p>
                <p className="text-[11px] text-[#4a4b46] line-clamp-2 leading-tight">{dim.tagline}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
