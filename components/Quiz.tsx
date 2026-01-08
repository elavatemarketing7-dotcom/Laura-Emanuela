
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, ASSETS, EXPERT } from '../constants';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, `${QUIZ_QUESTIONS[currentStep].question}: ${option}`];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="relative flex flex-col bg-transparent">
      {/* Compact Floating Expert Frame */}
      <div className="absolute top-4 right-4 z-10 sm:top-6 sm:right-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gold-gradient rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src={ASSETS.expert2} 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover shadow-lg relative"
            alt="Dra Laura"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border border-white rounded-full"></div>
        </div>
      </div>

      {/* Progress Header - More Compact */}
      <div className="p-6 pt-6 sm:p-8 space-y-3">
        <button onClick={onBack} className="text-stone-400 text-xs flex items-center gap-1 hover:text-stone-600 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Sair
        </button>
        <div className="space-y-0.5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold">Avaliação Personalizada</p>
          <h2 className="text-lg font-bold text-stone-800 serif italic leading-tight">Dra. {EXPERT.name}</h2>
        </div>
        <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gold-gradient transition-all duration-700 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Questions Content - More Compact */}
      <div className="flex-1 px-6 pb-8 sm:px-8 flex flex-col justify-center min-h-[300px]">
        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
          <h3 className="text-xl font-bold text-stone-900 leading-tight serif sm:text-2xl">
            {QUIZ_QUESTIONS[currentStep].question}
          </h3>
          <div className="grid gap-2.5">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-4 rounded-xl border border-stone-100 bg-white/60 shadow-sm hover:border-gold hover:bg-white active:scale-[0.97] transition-all duration-200"
              >
                <span className="text-stone-700 font-medium text-sm sm:text-base">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info - Tightened */}
      <div className="px-8 pb-6 text-center">
        <p className="text-stone-400 text-[9px] uppercase tracking-widest font-medium">Beleza realçada com técnica e exclusividade</p>
      </div>
    </div>
  );
};

export default Quiz;
