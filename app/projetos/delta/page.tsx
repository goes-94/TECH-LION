import Copyright from "@/components/copyright";

export default function DeltaPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white p-10">
      {/* Container Centralizado */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Esquerdo: Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src='/app-mobile.jpg' 
            alt="Foto do Projeto"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl border-2 border-[#FFD700] hover:scale-115 transition-transform duration-400"
          />
        </div>

        {/* Lado Direito: Textos (Agora em Coluna) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left gap-2">
          <h1 className="text-5xl font-bold text-[#FFD700] mb-6">PROJETO DELTA</h1>
          <p className="text-xl text-gray-300 mb-4">
            A tecnologia mobile que seu negócio exige, a usabilidade que seu dia a dia precisa.
          </p>
          <p className="text-gray-400">
          </p>
          <p className="text-gray-400">
            <strong className="text-white">Mobilidade Sob Medida:</strong>Aplicativos nativos e intuitivos, desenhados para colocar a gestão do seu negócio na palma da sua mão.
          </p>
          <p className="text-gray-400">
            <strong className="text-white">Interface Sofisticada:</strong>Design de elite que reflete a modernidade da sua marca e eleva a percepção do seu cliente.</p>

            <p className="text-gray-400">
                <strong className="text-white">Fluxo Sem Barreiras:</strong>Acesso rápido às funcionalidades vitais, eliminando etapas desnecessárias e poupando tempo precioso.
            </p>
            <p className="text-gray-400">
                <strong className="text-white">Integração Total:</strong>Sincronia perfeita com seu sistema principal, garantindo que a informação no computador seja a mesma no App.
            </p>
            <p className="text-gray-400">
                <strong className="text-white">Engajamento Constante:</strong>Uma experiência fluida que transforma cada interação em um diferencial competitivo para sua empresa.
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
        {/*import Copyright from '@/components/Copyright';
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#FFD700]/10 text-center text-gray-500 text-sm">
        <Copyright />
        </div>*/}
      </footer>

    </div>
  );
}
