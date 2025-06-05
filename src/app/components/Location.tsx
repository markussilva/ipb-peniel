'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import dynamic from 'next/dynamic'

// Importação dinâmica do mapa para evitar erros de SSR
const Map = dynamic(
  () => import('./Map'),
  {
    loading: () => (
      <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg" />
    ),
    ssr: false,
  }
)

// Horários de culto
const worshipTimes = [
  { day: 'Domingo', times: ['09:00 - Escola Dominical', '10:30 - Culto Matutino', '19:00 - Culto Vespertino'] },
  { day: 'Quarta-feira', times: ['19:30 - Estudo Bíblico'] },
  { day: 'Sábado', times: ['15:00 - Culto de Jovens'] },
]

export default function Location() {
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
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
            Onde Estamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar e fazer parte da nossa comunidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg"
          >
            <Map onLoad={() => setIsMapLoaded(true)} />
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-creme-50 rounded-lg p-8 shadow-lg"
          >
            {/* Endereço */}
            <div className="mb-8">
              <h3 className="font-merriweather text-2xl font-bold text-azul-900 mb-4">
                Endereço
              </h3>
              <div className="flex items-start text-gray-600">
                <div className="w-5 h-5 mr-3 text-coral-500 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p>Rua Exemplo, 123</p>
                  <p>Bairro - Cidade/UF</p>
                  <p>CEP: 12345-678</p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="mb-8">
              <h3 className="font-merriweather text-2xl font-bold text-azul-900 mb-4">
                Horários de Culto
              </h3>
              <div className="space-y-4">
                {worshipTimes.map(({ day, times }) => (
                  <div key={day} className="flex items-start">
                    <div className="w-5 h-5 mr-3 text-coral-500 mt-1">
                      <FaClock />
                    </div>
                    <div>
                      <p className="font-semibold text-azul-900">{day}</p>
                      {times.map((time) => (
                        <p key={time} className="text-gray-600">
                          {time}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                <div className="w-5 h-5 mr-2">
                  <FaWhatsapp />
                </div>
                Fale Conosco
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 