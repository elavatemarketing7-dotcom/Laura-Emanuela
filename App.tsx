
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import LandingPage from './components/LandingPage';
import { EXPERT, ASSETS } from './constants';

enum FlowState {
  CHOICE = 'choice',
  QUIZ = 'quiz',
  ANALYZING = 'analyzing',
  RESULT = 'result',
  SITE = 'site'
}

const App: React.FC = () => {
  const [view, setView] = useState<FlowState>(FlowState.CHOICE);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (view === FlowState.ANALYZING) {
      const timer = setTimeout(() => {
        setView(FlowState.RESULT);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleStartQuiz = () => setView(FlowState.QUIZ);
  const handleGoDirectToSite = () => setView(FlowState.SITE);
  const handleFinishQuiz = (answers: string[]) => {
    setQuizAnswers(answers);
    setView(FlowState.ANALYZING);
  };

  const getWhatsappLink = (suffix: string = "") => {
    const text = `Olá Dra. Laura! Acabei de fazer o quiz no seu site.\n\nResultados:\n${quizAnswers.join('\n')}\n\n${suffix}`;
    return `https://wa.me/${EXPERT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative bg-[#fdfbf7] min-h-screen">
      {/* Landing Page always in background after initial choice to allow transitions */}
      {view !== FlowState.CHOICE && <LandingPage />}

      {/* 1. INITIAL CHOICE OVERLAY WITH BACKGROUND */}
      {view === FlowState.CHOICE && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* BACKGROUND LAYER */}
          <div className="absolute inset-0 z-0">
            <img 
              src={ASSETS.expert1} 
              className="w-full h-full object-cover object-top scale-110 animate-ken-burns" 
              alt="Fundo Dra Laura" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/80 to-stone-900"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
          </div>

          {/* CONTENT CARD */}
          <div className="w-full max-w-sm overflow-hidden rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] bg-white/95 backdrop-blur-md flex flex-col items-center animate-in fade-in zoom-in duration-1000 relative border border-white/20">
            <div className="absolute top-0 left-0 w-full h-32 bg-stone-50/50 -z-10"></div>
            <div className="mt-10 relative">
              <div className="absolute -inset-4 bg-gold-gradient blur-2xl opacity-30 rounded-full animate-pulse"></div>
              <div className="w-36 h-36 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
                <img 
                  src={ASSETS.expert2} 
                  className="w-full h-full object-cover scale-110" 
                  alt="Dra Laura Emanuela Profile" 
                />
              </div>
            </div>
            
            <div className="p-8 text-center space-y-6 pt-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-stone-800 tracking-tight leading-tight">
                  Seja bem-vinda ao universo de <br/>
                  <span className="italic serif text-gold text-3xl">Laura Emanuela</span>
                </h2>
                <div className="h-px w-12 bg-gold-gradient mx-auto mt-2"></div>
              </div>
              
              <p className="text-stone-500 text-sm leading-relaxed px-4">
                Uma experiência exclusiva pensada para realçar sua essência com naturalidade.
              </p>

              <div className="space-y-3 pt-2 w-full">
                <button 
                  onClick={handleStartQuiz}
                  className="w-full py-5 rounded-2xl bg-gold-gradient text-white font-bold text-sm shadow-lg shadow-gold/20 transform active:scale-95 transition-all uppercase tracking-widest"
                >
                  Iniciar Avaliação Personalizada
                </button>
                
                <a 
                  href={EXPERT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-stone-900 text-white font-bold text-sm shadow-lg transform active:scale-95 transition-all uppercase tracking-widest"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.708-.941-.708-1.795 0-.855.448-1.273.607-1.441.159-.168.348-.21.463-.21s.231.001.332.005c.101.004.238-.039.373.287.144.349.491 1.2.535 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289-.087.101-.183.226-.26.304-.087.087-.177.182-.076.354.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                  Chamar no WhatsApp
                </a>
                
                <button 
                  onClick={handleGoDirectToSite}
                  className="w-full py-4 rounded-2xl border border-stone-100 text-stone-400 font-semibold text-[10px] hover:bg-stone-50 transition-all uppercase tracking-[0.2em]"
                >
                  Pular e acessar site
                </button>
              </div>
            </div>
          </div>
          
          <style>{`
            @keyframes ken-burns {
              0% { transform: scale(1); }
              100% { transform: scale(1.15); }
            }
            .animate-ken-burns {
              animation: ken-burns 20s ease-in-out infinite alternate;
            }
          `}</style>
        </div>
      )}

      {/* 2. COMPACT QUIZ OVERLAY */}
      {view === FlowState.QUIZ && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-md overflow-hidden">
          <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/40 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-10 duration-500">
            <Quiz onFinish={handleFinishQuiz} onBack={() => setView(FlowState.CHOICE)} />
          </div>
        </div>
      )}

      {/* 3. ANALYZING OVERLAY */}
      {view === FlowState.ANALYZING && (
        <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl p-8">
          <img src={ASSETS.expert2} className="w-32 h-32 rounded-full border-4 border-stone-100 shadow-xl mb-8 object-cover" alt="Analysing" />
          <h2 className="text-2xl font-bold text-stone-800 serif mb-2">Analisando respostas...</h2>
          <p className="text-stone-500 text-center mb-8">Buscando o melhor protocolo para sua face.</p>
          <div className="w-full max-w-xs h-2 bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-gold-gradient animate-[loading_2.5s_ease-in-out]"></div>
          </div>
          <style>{`
            @keyframes loading {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}</style>
        </div>
      )}

      {/* 4. COMPACT RESULT OVERLAY */}
      {view === FlowState.RESULT && (
        <div className="fixed inset-0 z-[80] bg-stone-50/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden">
          <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-8">
            <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl border border-white/40 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-500">
              
              <div className="relative h-44 sm:h-52 bg-stone-100 overflow-hidden">
                <img src={ASSETS.expert2} className="w-full h-full object-cover object-top" alt="Expert" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-[9px] font-extrabold tracking-widest uppercase shadow-sm">
                    Perfil Compatível
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 text-center space-y-4 -mt-2 relative bg-white">
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold text-stone-900 serif leading-tight">Você é a paciente ideal.</h1>
                  <p className="text-stone-500 text-xs leading-relaxed max-w-xs mx-auto">
                    O Método da <span className="font-bold text-stone-800">Dra. Laura Emanuela</span> é exatamente o que você busca para unir naturalidade e segurança.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a 
                    href={getWhatsappLink("Gostaria de enviar minha avaliação e agendar.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 rounded-xl bg-gold-gradient text-white font-extrabold text-xs shadow-lg shadow-gold/20 transform active:scale-95 transition-all animate-bounce-subtle"
                  >
                    1- ENVIAR AVALIAÇÃO À DRA
                  </a>
                  <a 
                    href={EXPERT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 rounded-xl bg-stone-900 text-white font-bold text-xs shadow-md transform active:scale-95 transition-all"
                  >
                    2- WHATSAPP SEM COMPROMISSO
                  </a>
                  <button 
                    onClick={() => setView(FlowState.SITE)}
                    className="flex items-center justify-center w-full py-4 rounded-xl bg-stone-50 border border-stone-100 text-stone-400 font-bold text-[10px] uppercase tracking-wider"
                  >
                    3- CONTINUAR NO SITE
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-6 text-stone-400 text-[10px] font-medium uppercase tracking-[0.2em]">
              Exclusividade & Naturalidade
            </p>
          </div>
          <style>{`
            @keyframes bounce-subtle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            .animate-bounce-subtle { animation: bounce-subtle 3s infinite; }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default App;
