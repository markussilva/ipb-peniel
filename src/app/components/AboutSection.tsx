"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBible,
  FaCross,
  FaDove,
  FaCrown,
  FaStar,
  FaHandshake,
} from "react-icons/fa";

// Componente de ícone com animação
function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-azul-900/10 rounded-full mb-4">
        <Icon className="w-8 h-8 text-azul-900" />
      </div>
      <h3 className="font-merriweather text-xl font-bold text-azul-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-creme-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-900 mb-6">
              Nossa Identidade Reformada
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Como igreja presbiteriana, somos parte da tradição reformada que
                remonta à Reforma Protestante do século XVI. Nossa fé é
                fundamentada nas Escrituras Sagradas, que consideramos a única
                regra infalível de fé e prática.
              </p>
              <p>
                Buscamos viver uma fé autêntica, centrada em Cristo, que se
                expressa em adoração reverente, ensino fiel, comunhão genuína e
                serviço ao próximo. Nossa comunidade é acolhedora, unida pelo
                amor a Deus e ao próximo.
              </p>
            </div>

            {/* Ícones com os 5 Solas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <IconCard
                icon={FaBible}
                title="Sola Scriptura"
                description="A Bíblia como única regra de fé e prática"
              />
              <IconCard
                icon={FaCross}
                title="Sola Fide"
                description="Justificação somente pela fé"
              />
              <IconCard
                icon={FaDove}
                title="Sola Gratia"
                description="Salvação somente pela graça"
              />
              <IconCard
                icon={FaCrown}
                title="Solus Christus"
                description="Salvação somente por Cristo"
              />
              <IconCard
                icon={FaStar}
                title="Soli Deo Gloria"
                description="Glória somente a Deus"
              />
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about-church.jpeg"
              alt="Nossa Igreja"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
