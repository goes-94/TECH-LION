"use client"; // Isso força o cálculo no navegador do usuário, não no build

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#FFD700]/10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} TechLion Solutions. Todos os direitos reservados.
    </footer>
  );
}
