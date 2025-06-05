'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

// Tipos
type Event = {
  id: string
  title: string
  date: string
  location: string
  description: string
}

// Dados mockados (futuramente virão de um CMS)
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Culto de Celebração',
    date: '2024-03-24T10:00:00',
    location: 'Templo Principal',
    description: 'Culto dominical com louvor e pregação',
  },
  {
    id: '2',
    title: 'Estudo Bíblico',
    date: '2024-03-27T19:30:00',
    location: 'Salão Social',
    description: 'Estudo do livro de Romanos',
  },
  {
    id: '3',
    title: 'Encontro de Jovens',
    date: '2024-03-30T15:00:00',
    location: 'Área de Convivência',
    description: 'Comunhão e estudo bíblico',
  },
]

// Componente de Skeleton
function EventSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-24 bg-gray-200 rounded-lg mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}

// Componente de Card de Evento
function EventCard({ event }: { event: Event }) {
  const formattedDate = new Date(event.date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-merriweather text-xl font-bold text-azul-900 mb-2">
            {event.title}
          </h3>
          <p className="text-gray-600">{formattedDate}</p>
        </div>
        <button
          className="px-4 py-2 bg-azul-900 text-white rounded-md hover:bg-coral-500 transition-colors duration-200"
          aria-label={`Ver detalhes do evento ${event.title}`}
        >
          Detalhes
        </button>
      </div>

      <div className="flex items-center text-gray-600 mb-2">
        <div className="w-4 h-4 mr-2 text-coral-500">
          <FaMapMarkerAlt />
        </div>
        <span>{event.location}</span>
      </div>

      <p className="text-gray-600">{event.description}</p>
    </motion.div>
  )
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Simulando carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(mockEvents)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="eventos" className="py-16 md:py-24 bg-creme-50">
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
            Próximos Eventos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossa agenda de eventos e participe das atividades da igreja.
          </p>
        </motion.div>

        {/* Lista de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loading
            <>
              <EventSkeleton />
              <EventSkeleton />
              <EventSkeleton />
            </>
          ) : (
            // Eventos carregados
            events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </div>
      </div>
    </section>
  )
} 