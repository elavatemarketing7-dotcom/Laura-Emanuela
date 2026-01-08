
import React, { useEffect, useState } from 'react';
import { EXPERT, ASSETS } from '../constants';
import Lightbox from './Lightbox';

const LandingPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex flex-col bg-stone-900 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.expert1} 
            className="w-full h-full object-cover object-top opacity-60 scale-105" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end p-8 pb-16">
          <div className="space-y-6 max-w-lg animate-in slide-in-from-bottom-20 duration-1000">
            <span className="inline-block px-4 py-1 rounded-full bg-gold-gradient text-white text-[10px] font-bold tracking-[0.2em] uppercase">
              {EXPERT.profession}
            </span>
            <h1 className="text-5xl font-bold text-white serif leading-[1.1]">
              Eu sou a <br/>
              <span className="italic">Dra. {EXPERT.name.split(' ')[0]}</span>
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed max-w-sm font-light">
              Transformando faces com a sensibilidade de quem entende que sua beleza é única e sagrada.
            </p>
            <div className="pt-4 space-y-4">
              <a 
                href={EXPERT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 rounded-full bg-gold-gradient text-white font-bold text-sm shadow-2xl hover:brightness-110 transition-all uppercase tracking-wider"
              >
                Agendar consulta
              </a>
              <p className="text-stone-400 text-center sm:text-left text-xs italic">
                * Vagas limitadas para este mês
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 px-8 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group scroll-reveal">
            <div className="absolute -inset-4 bg-gold-gradient opacity-10 blur-2xl rounded-3xl"></div>
            <video 
              src={ASSETS.video} 
              className="w-full rounded-3xl shadow-2xl aspect-[9/16] object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline
            />
          </div>
          <div className="space-y-6 scroll-reveal">
            <h2 className="text-3xl font-bold text-stone-900 serif leading-snug">
              Beleza com <br/><span className="italic text-gold">Propósito</span>
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial em cada detalhe.
            </p>
            <div className="pt-4 border-t border-stone-100">
              <span className="signature text-4xl text-stone-400">Laura Emanuela</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section id="autoridade" className="py-24 px-8 bg-[#f9f7f2]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 scroll-reveal">
            <img 
              src={ASSETS.expert3} 
              className="w-full rounded-[60px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Dra Laura Autoridade" 
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8 scroll-reveal">
            <h2 className="text-4xl font-bold text-stone-900 serif italic">A arte de harmonizar</h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>Minha missão é devolver a autoestima através de procedimentos que respeitam a anatomia e a identidade de cada paciente.</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>Avaliação facial 3D baseada em proporções áureas.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>Uso exclusivo de produtos premium biodegradáveis.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>Acompanhamento pós-procedimento humanizado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section id="resultados" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-stone-900 serif italic">Resultados que inspiram</h2>
          <p className="text-stone-500 max-w-md mx-auto text-sm">Toques sutis que revelam sua melhor versão.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2">
          {ASSETS.results.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all scroll-reveal"
              onClick={() => setActiveImage(img)}
            >
              <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={`Resultado ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-[10px] text-stone-400 italic">* Resultados podem variar de pessoa para pessoa.</p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-8 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Avaliação Honesta", desc: "Só indico o que realmente trará harmonia para sua face.", icon: "💎" },
            { title: "Técnica Exclusiva", desc: "Protocolos desenvolvidos para máxima naturalidade.", icon: "✨" },
            { title: "Ambiente Premium", desc: "Conforto e privacidade absoluta em seu atendimento.", icon: "🔒" },
            { title: "Segurança Total", desc: "Materiais certificados e domínio anatômico profundo.", icon: "🛡️" },
            { title: "Atendimento VIP", desc: "Tempo dedicado exclusivamente para ouvir seus desejos.", icon: "👑" },
            { title: "Clareza nos Resultados", desc: "Expectativas alinhadas com transparência total.", icon: "👁️" },
          ].map((card, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-stone-800 border border-stone-700 hover:border-gold transition-colors space-y-4 scroll-reveal">
              <div className="text-4xl">{card.icon}</div>
              <h3 className="text-xl font-bold serif">{card.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-8 bg-gold-gradient text-center">
        <div className="max-w-2xl mx-auto space-y-8 scroll-reveal">
          <h2 className="text-3xl font-bold text-white serif italic">Ainda tem dúvidas se a Harmonização é para você?</h2>
          <p className="text-white/90">Vamos conversar sem compromisso. Minha avaliação é focada em entender seu momento.</p>
          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-white text-gold font-extrabold text-sm shadow-2xl hover:scale-105 transition-transform uppercase"
          >
            Falar com a Dra. no WhatsApp
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section id="metodo" className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 serif italic text-center mb-20">Sua jornada de transformação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-stone-100 -z-10 hidden md:block"></div>
             {[
               { step: "01", title: "Contato Inicial", desc: "Clica no botão do WhatsApp e nossa equipe agendará seu melhor horário." },
               { step: "02", title: "Avaliação 3D", desc: "Na primeira consulta, analisamos cada detalhe da sua face e seus desejos." },
               { step: "03", title: "Seu Momento", desc: "Realizamos o protocolo escolhido com toda calma, segurança e cuidado." },
             ].map((item, idx) => (
               <div key={idx} className="text-center space-y-6 scroll-reveal">
                 <div className="w-16 h-16 rounded-full bg-white border-2 border-gold flex items-center justify-center mx-auto text-gold font-bold text-xl shadow-lg">
                   {item.step}
                 </div>
                 <h3 className="text-xl font-bold text-stone-800 serif">{item.title}</h3>
                 <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS - BASTIDORES */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="px-8 max-w-6xl mx-auto mb-12">
           <h2 className="text-4xl font-bold text-stone-900 serif italic">Experiência Dra. Laura</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 px-8 no-scrollbar">
          {ASSETS.lifestyle.map((img, idx) => (
            <div key={idx} className="shrink-0 w-72 h-[450px] rounded-[40px] overflow-hidden shadow-xl scroll-reveal">
              <img src={img} className="w-full h-full object-cover" alt={`Bastidores ${idx}`} />
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase text-stone-800">
                Atendimento Personalizado
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSETS.testimonials.map((img, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all scroll-reveal">
              <img src={img} className="w-full h-auto" alt="Depoimento de Paciente" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-8 bg-stone-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_70%)]"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-10 relative z-10 scroll-reveal">
          <h2 className="text-5xl font-bold text-white serif italic leading-tight">Chegou a hora de investir em você.</h2>
          <p className="text-stone-400 text-lg">Permita-se viver essa experiência única e redescobrir o que há de mais belo em sua face.</p>
          <div className="space-y-4">
             <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 rounded-full bg-gold-gradient text-white font-extrabold text-lg shadow-2xl hover:scale-105 transition-transform uppercase tracking-widest"
            >
              Falar agora no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section id="localizacao" className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-reveal">
            <h2 className="text-3xl font-bold text-stone-900 serif italic">Onde nos encontrar</h2>
            <div className="space-y-4 text-stone-600">
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <p>{EXPERT.address}</p>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📸</span>
                <a 
                  href={EXPERT.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @dralauraemanuela
                </a>
              </div>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EXPERT.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full border border-stone-200 text-stone-400 text-xs font-bold uppercase hover:bg-stone-50 transition-all"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl h-80 bg-stone-100 relative scroll-reveal">
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }} 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(EXPERT.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
                allowFullScreen
                loading="lazy"
                title="Localização Dra Laura"
              ></iframe>
          </div>
        </div>
      </section>

      {/* 9. RODAPE */}
      <footer className="py-12 px-8 bg-stone-50 border-t border-stone-100 text-center">
        <div className="space-y-6">
          <span className="signature text-5xl text-stone-300">Dra. {EXPERT.name}</span>
          <div className="text-stone-400 text-xs tracking-widest uppercase space-y-2">
            <p>{EXPERT.profession} | Santa Terezinha de Itaipu-PR</p>
            <p className="font-light">© 2024 Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {activeImage && <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />}
    </div>
  );
};

export default LandingPage;
