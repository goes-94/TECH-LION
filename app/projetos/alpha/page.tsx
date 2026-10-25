import Copyright from '@/components/copyright';
export default function AlphaPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white p-10">
      {/* Container Centralizado */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Esquerdo: Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src='/Painel-dashboard.webp' 
            alt="Foto do Projeto"
            className="rounded-2xl shadow-xl border-2 border-[#FFD700] hover:scale-115 transition-transform duration-500 w-300 h-100"
          />
        </div>

        {/* Lado Direito: Textos (Agora em Coluna) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left gap-2">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-6">PROJETO ALPHA</h1>
          <p className="text-xl text-gray-300 mb-4">
            A Inteligência que seu negócio precisa, a sofisticação que sua empresa merece.
          </p>
          <p className="text-gray-400">
            
          </p>
          <p className="text-gray-400">
            <strong className="text-white">Ecossistema Blindado:</strong> Substitua processos manuais por um ecossistema robusto, blindado e desenhado para a precisão.
          </p>
          <p className="text-gray-400">
            <strong className="text-white">Gestão Fluida:</strong> Transforme o caos operacional em clareza estratégica. Nossos dashboards oferecem uma visão panorâmica da linha de produção.</p>

            <p className="text-gray-400">
                <strong className="text-white"> Conciliação Inteligente:</strong> Elimine o erro humano. Com a conciliação automática, o seu caixa é atualizado de forma precisa, garantindo total transparência e maximizando a rentabilidade do seu negócio.
            </p>
            <p className="text-gray-400">
                <strong className="text-white">Operação sem Atrito:</strong>Sincronia total entre estoque e equipe, garantindo entregas fluidas e eficientes.
            </p>
            <p className="text-gray-400">
                <strong className="text-white">Conformidade & Segurança:</strong>Segurança de alto nível, operando dentro das normas fiscais mais rigorosas do mercado.
            </p>

            <a className="px-36 py-3 border-2 border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#FFD700] hover:text-[#0a0f1e] transition-all duration-300 ease-in-out rounded-x1" href="https://wa.me/5541995948068? text=Olá,%20gostaria%20de%20solicitar%20uma%20pré-visualização%20do%20projeto%20ALPHA." target="_blank">Solicitar Pré-Visualização</a>

        </div>
        

      </div>

      <footer className="border-t border-[#FFD700]/10 bg-[#0a0f1e] pt-40 pb-10 px-6" id='contact'>
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
        {/*import Copyright from '@/components/Copyright';*/}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#FFD700]/10 text-center text-gray-500 text-sm">
        <Copyright />
        </div>
      </footer>

    </div>
    
);
}
