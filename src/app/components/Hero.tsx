'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Modal de Culto Online
function LiveStreamModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-lg p-4 w-full max-w-4xl mx-4"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-azul-900 hover:text-coral-500"
          aria-label="Fechar modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="aspect-video relative">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO"
            title="Culto Online"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative h-screen">
      {/* Imagem de fundo */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Igreja Presbiteriana"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-merriweather text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Bem-vindo à Igreja Presbiteriana do Brasil - Peniel
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Comunidade centrada em Cristo, família e serviço
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#eventos"
              className="bg-azul-900 text-white px-8 py-3 rounded-md hover:bg-coral-500 transition-colors duration-200"
            >
              Próximos Eventos
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-azul-900 px-8 py-3 rounded-md hover:bg-dourado-500 transition-colors duration-200"
            >
              Culto Online
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal de Culto Online */}
      <LiveStreamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
} 