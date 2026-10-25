'use client';
import { motion } from 'framer-motion';
import { ProjetoCard } from "../components/ProjetoCard";

export default function Home() {
  return (
    <main className="bg-[#0a0f1e] min-h-screen text-white">
      {/* Navbar - Usando flexbox simples */}
      <nav className="border-b border-white/10 p-6 flex justify-between items-center">
        <h1 className="font-bold text-lg tracking-tighter">TECH<span className="text-cyan-400">LION</span></h1>
      <div className='justify-end gap-2'>
        <a href="#projetos" className="px-5 py-2 rounded-full  hover:text-cyan-400 transition justify-end gap-2 uppercase">Projetos</a>
        <a href="#tech" className="hover:text-cyan-400 transition justify-end gap-2 uppercase">Tecnologia</a>
        <a href="#contact" className="px-5 py-2 rounded-full  hover:text-cyan-400 transition justify-end gap-2 uppercase">Contato</a>
      </div>
      </nav>

      {/* Hero Content - Removi as animações complexas por um momento para garantir estabilidade */}
      <section className="py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold tracking-tighter bg-white {/*bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600*/} bg-clip-text text-transparent">TECH LION</h1>
        <p className="text-cyan-400 mt-4 uppercase tracking-widest">Arquitetura Digital de Alta Performance</p>
      </section>

              {/* Grid de Projetos */}
              {/*// Importe o componente que você criou*/}
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5.5" id='projetos'>
        <ProjetoCard 
          titulo="PROJETO ALPHA" 
          descricao="Arquitetura escalável com foco em performance."
          link="/projetos/alpha" 
        />
        <ProjetoCard 
          titulo="PROJETO BETA" 
          descricao="Sistema de IA integrado com processamento em tempo real."
          link="/projetos/beta"
        />
        <ProjetoCard 
          titulo="PROJETO GAMMA" 
          descricao="Sistema de IA integrado com processamento em tempo real."
          link='/projetos/gamma' 
        />
        <ProjetoCard 
          titulo="PROJETO DELTA" 
          descricao="Sistema de IA integrado com processamento em tempo real."
          link='/projetos/delta'
        />
          {/* Pode adicionar quantos quiser aqui */}
      </div>

      <section className="py-20 bg-[#0a0f1e] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          
          {/* Lado Esquerdo: Imagem com efeito Glassmorphism */}
          <div className="flex-1 relative" id='tech'>
            <div className="absolute inset-0 bg-[#FFD700] blur-3xl opacity-10 rounded-full"></div>
            <img 
              src="/identidade-visual.webp" 
              alt="Tecnologia TechLion" 
              className="relative rounded-2xl border border-gray-700 shadow-2xl
              w-400
              h-100
              hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Lado Direito: Conteúdo */}
          <div className="flex-1 space-y-6">
            <span className="text-[#FFD700] font-bold tracking-widest uppercase text-sm">Tecnologia de Ponta</span>
            <h2 className="text-4xl md:text-5xl font-bold">Arquitetura robusta para o seu negócio</h2>
            <p className="text-gray-400 text-lg">
              Utilizamos as tecnologias mais modernas do mercado para garantir que seu SaaS seja rápido, seguro e escalável. 
              Não entregamos apenas código, entregamos infraestrutura de alto nível.
            </p>
      
            <ul className="space-y-4">
              {['Infraestrutura na nuvem AWS', 'Criptografia de ponta a ponta', 'Performance otimizada (Next.js)'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#FFD700]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Lado Esquerdo: Visual com Glow */}
        <div className="relative w-full md:w-1/2 group transition-transform duration-300 hover:scale-110">
          <div className="absolute inset-0 bg-[#FFD700] blur-3xl opacity-10 rounded-full"></div>
          <div className="relative border-1 border-gray-700 rounded-2xl p-2 bg-[#0a0f1e] ">
            <img src="/image-segurança-ssas-b2b.jpg" alt="Dashboard" className="rounded-x w-full
            h-80" />
          </div>
        </div>

        {/* Lado Direito: Benefícios */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-[#FFD700] font-bold tracking-widest uppercase text-sm">Tecnologia de Ponta</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Infraestrutura Blindada</h2>
          
          <ul className="space-y-4">
            {[
              "Arquitetura serverless com alta escalabilidade",
              "Criptografia de dados AES-256",
              "Monitoramento 24/7 com uptime de 99.9%"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-[#FFD700]">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Nossa Metodologia de Sucesso</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Imersão Estratégica", desc: "Análise profunda das suas necessidades e gargalos operacionais." },
            { step: "02", title: "Desenvolvimento Ágil", desc: "Ciclos de entrega rápidos, focados em valor real e alta performance." },
            { step: "03", title: "Sustentação & Escala", desc: "Suporte contínuo para garantir que sua tecnologia evolua com o seu negócio." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-[#FFD700]/20 rounded-2xl bg-[#0a0f1e] hover:border-[#FFD700] duration-300 transition-colors">
              <div className="text-[#FFD700] font-bold text-4xl mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#FFD700]/10 bg-[#0a0f1e] pt-20 pb-10 px-6" id='contact'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Coluna 1: Branding com o Leão */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Substitua pelo caminho da sua logo */}
              <img src="/Logo-TechLion.png" alt="TechLion Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-white tracking-tight">TechLion</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Elevando negócios através de tecnologia de ponta, infraestrutura robusta e soluções digitais inteligentes.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-[#FFD700] font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#projetos" className="hover:text-[#FFD700] transition-colors">Projetos</a></li>
              <li><a href="#tecnologia" className="hover:text-[#FFD700] transition-colors">Infraestrutura</a></li>
              <li><a href="#metodologia" className="hover:text-[#FFD700] transition-colors">Metodologia</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-[#FFD700] font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Curitiba PR, BR</li>
              <li ><a href='mailto:techlion@gmail.com' target='_blank' className=' underline text-white hover:text-[#FFD700] transition-colors '> contato@techlion.com.br</a></li>
              <li className="pt-2">
                <a href="https://wa.me/5541995948068? 
                text=Olá,%20gostaria%20de%20solicitar%20uma%20pré-visualização%20dos%20projetos." 
                target="_blank" className=" list-none  text-white hover:text-[#FFD700] underline underline-offset-4">
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#FFD700]/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TechLion Solutions. Todos os direitos reservados.
        </div>
      </footer>



    </main>
  );
}
