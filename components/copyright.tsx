"use client"; // Isso libera o uso de Date() no lado do cliente

export default function Copyright() {
  return (
    <p>© {new Date().getFullYear()} TechLion Solutions. Todos os direitos reservados.</p>
  );
}
