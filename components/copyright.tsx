"use client";

import { useState, useEffect } from 'react';

export default function Copyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p>
      © {year ? year : new Date().getFullYear()} TechLion Solutions. Todos os direitos reservados.
    </p>
  );
}
