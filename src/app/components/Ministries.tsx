"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Tipos
type Ministry = {
  id: string;
  title: string;
  description: string;
  image: string;
  ageRange: string;
};

// Dados mockados (futuramente virão de um CMS)
const ministries: Ministry[] = [
  {
    id: "infantil",
    title: "Ministério Infantil",
    description: "Discipulado e ensino bíblico para crianças",
    image: "/images/ministry-kids.jpeg",
    ageRange: "4-12 anos",
  },
  {
    id: "juvenil",
    title: "Ministério de Jovens",
    description: "Comunhão e crescimento espiritual",
    image: "/images/ministry-youth.jpeg",
    ageRange: "13-25 anos",
  },
  {
    id: "mulheres",
    title: "Ministério de Mulheres",
    description: "Comunhão e estudo bíblico",
    image: "/images/ministry-women.jpeg",
    ageRange: "18+ anos",
  },
  {
    id: "homens",
    title: "Ministério de Homens",
    description: "Discipulado e liderança",
    image: "/images/ministry-men.jpeg",
    ageRange: "18+ anos",
  },
];

// Componente de Card
function MinistryCard({ ministry }: { ministry: Ministry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Imagem */}
      <div className="relative h-48">
        <Image
          src={ministry.image}
          alt={ministry.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-merriweather text-xl font-bold text-azul-900">
            {ministry.title}
          </h3>
          <span className="px-2 py-1 bg-dourado-500/20 text-azul-900 text-sm rounded-full">
            {ministry.ageRange}
          </span>
        </div>
        <p className="text-gray-600">{ministry.description}</p>
      </div>

      {/* Overlay de hover */}
      <div className="absolute inset-0 bg-azul-900/0 group-hover:bg-azul-900/10 transition-colors duration-300" />
    </motion.div>
  );
}

export default function Ministries() {
  return (
    <section id="ministerios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-900 mb-4">
            Nossos Ministérios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os diferentes ministérios da nossa igreja, cada um com seu
            propósito específico de servir e edificar a comunidade.
          </p>
        </motion.div>

        {/* Grid de Ministérios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.id} ministry={ministry} />
          ))}
        </div>
      </div>
    </section>
  );
}
