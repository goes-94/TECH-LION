'use client';
import { motion } from "framer-motion";
import Link from "next/link"; 

interface ProjetoProps {
  titulo: string;
  descricao: string;
  link: string; 
}

export function ProjetoCard({ titulo, descricao, link }: ProjetoProps) {
  return (
    // Se o erro for no 'link', vamos garantir que ele seja uma string válida
    <Link href={link as string} className="block"> 
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
        
        <h3 className="text-xl font-bold mb-2 relative z-10">{titulo}</h3>
        <p className="text-gray-400 text-sm mb-6 relative z-10">{descricao}</p>
        <div className="mt-10 w-12 h-[2px] bg-cyan-500 group-hover:w-20 transition-all duration-300  " />
      </motion.div>
    </Link>
  );
}
